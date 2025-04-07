package com.example.FinalProject.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.FinalProject.dto.OrderHeaderDto;

@Mapper
public interface OrderMapper {
	// 발주 가능한 물품 리스트 가져오기
	List<OrderHeaderDto> getOrderHeaderList();
}
