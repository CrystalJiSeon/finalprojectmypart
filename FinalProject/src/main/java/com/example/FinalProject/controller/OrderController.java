package com.example.FinalProject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.FinalProject.dto.OrderHeaderDto;
import com.example.FinalProject.service.OrderService;

@RestController
public class OrderController {
	
	@Autowired OrderService service;
	
	// 테스트용
	@GetMapping("/order/ping")
	public String ping() {
		return "pong";
	}
	
	// 발주 가능한 물품 리스트 가져오기
	@GetMapping("/order/order-header")
	public List<OrderHeaderDto> getMethodName() {
		System.out.println("여기!");
		return service.getOrderHeaderList();
	}

}
