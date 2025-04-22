package com.example.FinalProject.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.FinalProject.dto.SalesDto;

@Mapper
public interface SalesMapper {
	//Admin 측
	//지점번호와 bcode를 읽으면
	List<SalesDto> getAdminSalesList(@Param("storenum") int storenum, @Param("bcodes") List<String> bcodes);
	SalesDto getAdminSalebyId(int adminsaleid);
	int insertAdminSales(SalesDto dto);
	int editAdminSales(SalesDto dto);
	int deleteAdminSales(int adminsaleid);//
	//발주가 "승인"일 때 발주 비용 추가하는 메소드(발주에서 사용)
	int insertOrderApprovedCost(SalesDto dto);
	//수업이 '진행중'일 때 수업료 수입을 추가하는 메소드(수업에서 사용)
	int insertClsIngProfit(SalesDto dto);
	
	
	//Ceo측
	
}
