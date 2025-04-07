package com.example.FinalProject.service;

import java.util.List;

import com.example.FinalProject.dto.OrderHeaderDto;

public interface OrderService {
	
	// 발주 가능한 물품 리스트 가져오기
	public List<OrderHeaderDto> getOrderHeaderList();
}
