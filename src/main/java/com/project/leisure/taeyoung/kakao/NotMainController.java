package com.project.leisure.dogyeom.kakao;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class NotMainController {

	@GetMapping("/date")
	public String date() {
		return "calendar";
	}
	
}
