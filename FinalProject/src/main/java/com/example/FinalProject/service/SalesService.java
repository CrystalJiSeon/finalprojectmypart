package com.example.FinalProject.service;

import java.util.List;

import com.example.FinalProject.dto.AdminSalesDto;


public interface SalesService {
	//날짜별 매출 리스트 가져오기
	public List<AdminSalesDto> getListDaily(String sales_date);
	public List<AdminSalesDto> getListMonthly(String sales_date);
	public List<AdminSalesDto> getListYearly(String sales_date);
	//강의실별 매출 리스트 가져오기
	public List<AdminSalesDto> getMonthlyByClass(int class_id);
	public List<AdminSalesDto> getYealryByClass(int class_id);
	//지출 : 연도별 강사별 월급 계산하기
	public List<AdminSalesDto> getListCost(String sales_date);
	//매출 : 입력, 수정, 삭제
	public int addSales(AdminSalesDto dto);
	public int updateSales(AdminSalesDto dto);
	public int deleteSales(int sales_id);
}
