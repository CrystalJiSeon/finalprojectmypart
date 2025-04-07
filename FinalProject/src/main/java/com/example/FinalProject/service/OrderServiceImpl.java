package com.example.FinalProject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.FinalProject.dto.OrderHeaderDto;
import com.example.FinalProject.mappers.OrderMapper;

@Service
public class OrderServiceImpl implements OrderService{

	@Autowired private OrderMapper mapper;
	
	// 발주 가능한 물품 리스트 가져오기
	@Override
	public List<OrderHeaderDto> getOrderHeaderList() {
		System.out.println("!!!!!!!!!!!");
		return mapper.getOrderHeaderList();
	}

}
