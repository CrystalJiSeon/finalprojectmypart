package com.example.FinalProject.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.FinalProject.dto.SalesDto;

@Mapper
public interface SalesMapper {
	//Admin 측
	//지점번호와 bcode를 넣어서 수입/지출 리스트를 가져오기
	List<SalesDto> getAdminSalesList(@Param("storenum") int storenum, @Param("bcodes") List<String> bcodes);
	SalesDto getAdminSalebyId(int adminsaleid);
	int insertAdminSales(SalesDto dto);
	int editAdminSales(SalesDto dto);
	int deleteAdminSales(int adminsaleid);//
	//발주가 "승인"일 때 발주 비용 추가하는 메소드와 관련 메소드(발주에서 사용)
	int insertOrderApprovedCost(SalesDto dto);
	int countByClassId(@Param("classid") int classid);
	int getPriceByClassId(@Param("classid") int classid);
	String getNameByClassId(@Param("classid") int classid);
	//수업이 '진행중'일 때 수업료 수입을 추가하는 메소드와 관련 메소드(수업에서 사용)
	int insertClsIngProfit(SalesDto dto);
	//연도별 수입 데이터 불러오기
	List<SalesDto> getAdminProfitStatbyYear();
	//연도별 지출 데이터 불러오기
	List<SalesDto> getAdminCostStatbyYear();
	//연도별 과목별 데이터 불러오기
	List<SalesDto> getAdminSalesStatbyLectYearly();
	//연도의 월별 과목별 데이터 불러오기
	List<SalesDto> getAdminSalesStatbyLectMonthly();
	
	//Ceo측
	
}
