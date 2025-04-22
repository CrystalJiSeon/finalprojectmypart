package com.example.FinalProject.service;

import java.util.List;

import com.example.FinalProject.dto.AdminSalesDto;


public interface SalesService {
	//매출 : 입력, 수정, 삭제 <-수업 가격, 분반 수업 아이디, 매장 번호, 학생 번호 가져오기
	public int addSales(AdminSalesDto dto);
	public int updateSales(AdminSalesDto dto);
	public int deleteSales(int sales_id);
	//날짜별 매출 리스트 가져오기
	public List<AdminSalesDto> getListDaily(String sales_date);
	public List<AdminSalesDto> getListMonthly(String sales_date);
	public List<AdminSalesDto> getListYearly(String sales_date);
	//강사별 매출 리스트 가져오기
	public List<AdminSalesDto> getMonthlyByClass(int class_id);
	public List<AdminSalesDto> getYealryByClass(int class_id);
	//수업별 매출 리스트 가져오기
	public List<AdminSalesDto> getMonthlyByLecture(int lecture_id);
	public List<AdminSalesDto> getYealryByLecture(int lecture_id);
	//상반기/하반기 매출 : 연도별, 강사별, 수업별
	public List<AdminSalesDto> getListHalf();
	public List<AdminSalesDto> getListHalfByClass();
	public List<AdminSalesDto> getListHalfByLecture();
	//지출 : 연도별 강사별 월급 계산하기
	public List<AdminSalesDto> getListCost(String sales_date);
	
}
