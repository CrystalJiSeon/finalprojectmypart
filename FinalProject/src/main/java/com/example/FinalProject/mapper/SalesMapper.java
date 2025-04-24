package com.example.FinalProject.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.example.FinalProject.dto.SalesDto;

@Mapper
public interface SalesMapper {
	//Admin 측
	//지점번호와 bcode를 넣어서 수입/지출 리스트를 가져오기
	List<SalesDto> getAdminSalesList(Map<String, Object> map);//@Param("store_name") int store_name, @Param("b_codes") List<String> b_codes
	SalesDto getAdminSalebyId(int adminsaleid);
	int insertAdminSales(SalesDto dto);
	int editAdminSales(SalesDto dto);
	int deleteAdminSales(int adminsaleid);//
	//발주가 "승인"일 때 발주 비용 추가하는 메소드와 관련 메소드(발주에서 사용)
	int insertOrderApprovedCost(SalesDto dto);
	SalesDto getApprovedOrderId(String status);
	List<SalesDto> getOrderDetailByOrderId(@Param("order_id") int order_id);
	SalesDto getNameByProductId(@Param("order_id") int order_id);
	//수업이 '진행중'일 때 수업료 수입을 추가하는 메소드와 관련 메소드(수업에서 사용)
	int insertClsIngProfit(SalesDto dto);
	SalesDto getProfitByClassId(int class_id);
//	int countByClassId(@Param("classid") int classid);
//	SalesDto getPriceByClassId(@Param("classid") int classid);
	SalesDto getNameByClassId(@Param("class_id") int class_id);
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
