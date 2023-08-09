

$(document).ready(function () {
  // Loop through each row in the table with id "cancelTable"
  $("#cancelTable tbody tr").each(function () {
    var statusText = $(this).find("#status_bk").text().trim();
    // Check if the status text is "예약완료"
    if (statusText === "예약완료") {
      // Show the "취소하기" button for this row
      $(this).find(".cancel-button").show();
    } else {
      // Hide the "취소하기" button for rows with other statuses
      $(this).find(".cancel-button")
        .prop("disabled", true) // Disable the button
        .addClass("grayscale"); 
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Function to handle the "취소하기" button click
  function handleCancelClick(cancelBtn) {
    // Get the value from <td id="paymenttype"></td>
    const paymentType = cancelBtn.parentElement.parentElement.querySelector("#paymenttype").textContent.trim();

    // Show SweetAlert confirmation popup for both "KAKAO" and "TOSS" payment types
    Swal.fire({
      title: '취소하시겠습니까?',
      text: '(취소 하시면 결제가 자동 취소 됩니다.)',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: '네, 취소합니다',
      cancelButtonText: '아니오',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        if (paymentType === "KAKAO") {
          // Proceed with KAKAO cancellation logic
          const tid = cancelBtn.parentElement.parentElement.querySelector("#paymentNumber").textContent;
          const amount = cancelBtn.parentElement.parentElement.querySelector("#bbb_total").textContent;
          const cleanedAmount = amount.replace(/,/g, '');

          fetch(`/refundd`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              tid: tid,
              cancel_amount: cleanedAmount,
              cancel_tax_free_amount: "200",
              cancel_vat_amount: "200"
            })
          })
            .then(response => response.json())
            .then(cres => {
              location.replace('/admin/cancle_req');
            })
            .catch(error => {
              console.error("Error:", error);
            });
        } else if (paymentType === "TOSS") {
          // Proceed with TOSS cancellation logic
          const paymentKey = cancelBtn.parentElement.parentElement.querySelector("#paymentNumber").textContent;
          const cancelReason = cancelBtn.parentElement.parentElement.querySelector("td:nth-child(6)").textContent;

          fetch(`/book/toss/cancel`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              paymentKey: paymentKey,
              cancelReason: cancelReason
            })
          })
            .then(response => response.json())
            .then(cres => {
              Swal.fire({
                title: 'TOSS 취소 완료',
                text: 'TOSS 결제가 취소되었습니다.',
                icon: 'success'
              });
              location.replace('/admin/cancle_req');
            })
            .catch(error => {
              console.error("Error:", error);
            });
        } else {
          // If paymentType is neither "KAKAO" nor "TOSS", display an error message or perform alternative actions
          console.error("Invalid payType:", paymentType);
          // Or any other logic you want to perform for other payment types
        }
      }
      // If user clicks "Cancel" or dismisses the popup, do nothing
    });
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  const cancelButtons = document.querySelectorAll(".cancel-button");
  cancelButtons.forEach((cancelButton) => {
    cancelButton.addEventListener("click", function () {
      handleCancelClick(cancelButton);
    });
  });

  // Get all the rows from both tables
  const cancelRows = document.querySelectorAll("#cancelTable tbody tr");
  const bookingRows = document.querySelectorAll("#bookingTable tbody tr");

  // Loop through each row of the cancel table
  cancelRows.forEach((cancelRow, index) => {
    const cancelBookNumValue = parseInt(cancelRow.querySelector("td:nth-child(2)").textContent.trim(), 10);

    // Initialize variables to track if a match is found for bookStatus and bookingTid
    let matchFoundBookStatus = false;
    let matchFoundBookingTid = false;

    // Loop through each row of the booking table
    bookingRows.forEach((bookingRow, bookingIndex) => {
      const bookingBookNum = parseInt(bookingRow.querySelector("td:nth-child(1)").textContent.trim(), 10);
      const bookingTid = bookingRow.querySelector("td:nth-child(5)").textContent.trim();
      const bookingStatus = bookingRow.querySelector("td:nth-child(2)").textContent.trim();
      const bookingPayType = bookingRow.querySelector("td:nth-child(6)").textContent.trim(); // Add this line to get the payType value
      const bookingTotalPrice = bookingRow.querySelector("td:nth-child(7)").textContent.trim(); // Add this line to get the totalPrice value

      // Compare the values and update the <td id="paymentNumber"> and <td id="status_bk"> accordingly
      if (cancelBookNumValue === bookingBookNum) {
        cancelRow.querySelector("#paymentNumber").textContent = bookingTid;
        matchFoundBookingTid = true;

        // Check if bookingStatus is already found earlier (to avoid duplicate matching)
        if (!matchFoundBookStatus) {
          cancelRow.querySelector("#status_bk").textContent = bookingStatus;
          matchFoundBookStatus = true;
        }
        
        // Update the <td id="bbb_total"> with the booking's totalPrice value
        cancelRow.querySelector("#bbb_total").textContent = bookingTotalPrice;

        // Update the <td id="paymenttype"> with the booking's payType value
        cancelRow.querySelector("#paymenttype").textContent = bookingPayType;
        
        // Extract accomTitle and roomTitle values from the corresponding booking row
        const bookingAccomTitle = bookingRows[bookingIndex].querySelector("td:nth-child(3)").textContent.trim();
        const bookingRoomTitle = bookingRows[bookingIndex].querySelector("td:nth-child(4)").textContent.trim();

        // Update the <td id="acc_acc_name"> and <td id="pro_pro_name"> with the extracted values
        cancelRow.querySelector("#acc_acc_name").textContent = bookingAccomTitle;
        cancelRow.querySelector("#pro_pro_name").textContent = bookingRoomTitle;
      }
    });

    // If no match is found for bookingTid, clear the content of the <td id="paymentNumber">
    if (!matchFoundBookingTid) {
      cancelRow.querySelector("#paymentNumber").textContent = "";
    }

    // If no match is found for bookStatus, clear the content of the <td id="status_bk">
    if (!matchFoundBookStatus) {
      cancelRow.querySelector("#status_bk").textContent = "";
    }
  });
});










/* 거절 */
 function rejectCancelRequest(id) {
  Swal.fire({
    title: '거절하시겠습니까?',
    text: '(거절하시면 예약 취소 요청이 거절됩니다.)',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: '네, 거절합니다',
    cancelButtonText: '아니오',
    reverseButtons: true,
  }).then((result) => {
    if (result.isConfirmed) {
      // User clicked "네" in the confirmation dialog, proceed with the AJAX request
      $.ajax({
        type: "POST",
        url: "/cancel-requests/reject/" + id,
        success: function (data) {
          // Reload the page or update the UI as needed
          // For example, you can reload the page after successful rejection
          location.reload();
        },
        error: function (error) {
          // Handle error if needed
          console.error(error);
        },
      });
    } else {
      // User clicked "아니오" in the confirmation dialog, do nothing
      // You can add additional behavior here if needed
    }
  });
}

// Bind the "거절하기" button click event to call the rejectCancelRequest function
$(document).ready(function () {
  $(".reject-button").click(function () {
    var id = $(this).closest("tr").find("td:first-child").text();
    rejectCancelRequest(id);
  });
});


  document.addEventListener('DOMContentLoaded', function() {
        // Get all the <td> elements with id "status_bk"
        var statusElements = document.querySelectorAll('#status_bk');

        // Loop through each element to update the text
        statusElements.forEach(function(element) {
            var status = element.textContent.trim();
            if (status === 'CANCEL_PAYMENT' || status === 'CANCELED') {
                element.textContent = '취소완료';
            }
        });
    });










