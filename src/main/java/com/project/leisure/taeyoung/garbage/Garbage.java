package com.project.leisure.dogyeom.garbage;

import java.time.LocalDate;
import java.time.LocalDateTime;

import org.springframework.stereotype.Component;

import com.project.leisure.yuri.product.Accommodation;
import com.project.leisure.yuri.product.Product;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Component
@Builder
public class Garbage { // 5년마다 삭제 되도록 스케줄관리 + 인터페이스 구현

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	private Integer bookNum; // 예약 번호
	
	//@Column(name = "book_status", nullable = false)
	private String bookStatus; // 예약 상태
	
	private String bookerID; // 예약자 아이디(회원, 비회원 구분)
	private String bookerName; // 예약자 이름
	private String bookerTel; // 예약자 전화번호
	private String accomTitle; // 숙소명
	private String roomTitle; // 객실명(상품명)
	
	private LocalDate checkin; // 체크인 날짜
	
	@Column(name = "check_out", nullable = false)
	private LocalDate checkOut; // 체크아웃 날짜
	
	private int bookHeadCount; // 인원수
	private String paymentDate; // 결제일
	
	private String canceled_at; // 결제 취소일
	
	private String payType; // 결제 방식
	private String totalPrice; // 총 결제 금액
	
	private Long tempRoomId; // 객실아이디(외래키 적용 예정)
//	@JsonIgnore
	@OneToOne
	@JoinColumn(name = "roomID", referencedColumnName = "product_id")
	private Product product;
	
	private Long tempAccomId; // 숙소아이디(외래키 적용 예정)
	
	@OneToOne
	@JoinColumn(name = "accomID", referencedColumnName = "id")
	private Accommodation accommodation;
	
	private String tid; // 결제번호(카카오에서 받음)
	
	// 추가
	private String productImg;
	
	private LocalDateTime created_at;

	private LocalDateTime modified_at;

}