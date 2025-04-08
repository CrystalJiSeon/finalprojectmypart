package com.example.FinalProject.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import com.example.FinalProject.dto.AdminSalesDto;


@Mapper
public interface AdminSalesMapper {
	//일 매출 가져오기(~월의 일매출을 그래프로->일 매출이 한 기둥으로 리스트 = 한 테이블)
	List<AdminSalesDto> getListDaily();
	//월 매출 가져오기(~연도의 월매출을 그래프로 -> 월매출이 한 기둥으로 리스트 = 한 테이블)
	List<AdminSalesDto> getListMonthly();
	//연 매출 가져오기(연도별 매출이 그래프 한 기둥 = 한 칼럼 )
	List<AdminSalesDto> getListYearly();
	//수업별 매출 가져오기
	List<AdminSalesDto> getSaleByClass();
	//지출  가져오기
	List<AdminSalesDto>	getListCost();
	//매출 입력하기
	int  insert(AdminSalesDto dto);
	//매출 수정하기
	int update(AdminSalesDto dto);
	//매출 삭제하기
	int deleteSale(int sales_id);
	//수업 가격 가져오기
	int getPrice(int lecture_id);
	//분반의 수업 아이디 가져오기
	int getLecureId(int class_id);
	
}
