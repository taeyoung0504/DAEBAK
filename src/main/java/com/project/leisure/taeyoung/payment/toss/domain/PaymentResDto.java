package com.project.leisure.dogyeom.toss.domain;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class PaymentResDto {
	
	private String payType;
	
	private Long amount;
	
	private String orderName;
	
	private String orderId;
	
	private String customerEmail;
	
	private String successUrl;
	
	private String failUrl;
	
	
	private String failReason;
	
	private boolean cancelYN;
	
	private String cancelReason;
	
	private LocalDateTime createdAt;
	
}
