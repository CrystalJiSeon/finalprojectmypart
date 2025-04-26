package com.example.FinalProject.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import com.example.FinalProject.dto.AdminSalesDto;


@Mapper
public interface AdminSalesMapperBefore {
	//일 매출 가져오기(~월의 일매출을 그래프로->일 매출이 한 기둥으로 리스트 = 한 테이블)
	List<AdminSalesDto> getListDaily();
	//월 매출 가져오기(~연도의 월매출을 그래프로 -> 월매출이 한 기둥으로 리스트 = 한 테이블)
	List<AdminSalesDto> getListMonthly();
	//연 매출 가져오기(연도별 매출이 그래프 한 기둥 = 한 칼럼 )
	List<AdminSalesDto> getListYearly();
	
	//강사별 월매출 가져오기
	List<AdminSalesDto> getMonthlyByClass();
	//강사별 연매출 가져오기
	List<AdminSalesDto> getYearlyByClass();
	
	//수업별 월매출 가져오기
	List<AdminSalesDto> getMonthlyByLecture();
	//수업별 연매출 가져오기
	List<AdminSalesDto> getYearlyByLecture();
	
	//연도별 상반기/하반기 가져오기(1월 ~6월, 7월 ~12월) 
	List<AdminSalesDto> getListHalfByYear();
	//강사별 상반기/하반기 가져오기(1월 ~6월, 7월 ~12월) 
	List<AdminSalesDto> getListHalfByClass();	
	//수업별 상반기/하반기 가져오기(1월 ~6월, 7월 ~12월) 
	List<AdminSalesDto> getListHalfByLecture();
	
	//지출 연도별 -강사 월급 지출 가져오기
	List<AdminSalesDto>	getListCost();
	
	//매출 입력하기
	int  insert(AdminSalesDto dto);
	//매출 수정하기
	int update(int sales_id);
	//매출 삭제하기
	int deleteSale(int sales_id);
	
	//수업 가격 가져오기
	int getPrice(int lecture_id);
	//분반의 수업 아이디 가져오기
	int getLectureId(int class_id);
	//매장 번호 가져오기
	int getStorenum(String username);
	//학생 번호 가져오기
	int getStudentId(int class_id);
	
	
}
