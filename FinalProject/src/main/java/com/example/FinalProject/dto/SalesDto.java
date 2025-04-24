package com.example.FinalProject.dto;

import org.apache.ibatis.type.Alias;

import lombok.Data;

@Alias("SalesDto")
@Data
public class SalesDto {
	int adminsale_id;//지점 adminsale 고유번호
	int ceosale_id;//본사 ceosale 고유번호
	String store_name;//매장번호 = tb_user.storename
	String sale_name;//매출 항목
	String cre_date;//매출 날짜
	String edit_date;//매출 수정 날짜
	int price;//항목 금액
	String a_code;//구분코드 : 수입/지출
	String b_code;//상세구분코드 : 수업료수입, 기타수입,강사월급, 발주비용, 기타지출
	String auto;//default: yes(발주나 수업에서 처리됨), no: 담당자가 직접 입력

	//쿼리문 관련
	int total_profit;//총수입
	int total_cost;//총지출
	int total_price;//총금액
	String sdate;//문자열로 변환된 date 타입의 data
	String smonth;//상동  
	String syear;//상동
	//수업 관련 : tb_class, tb_student_class
	String cls_status;//수업 상태 : 진행중
	int class_id;//수업 고유 번호
	int cls_price;//수업료
	int student_count;//학생 수
	
	//발주 관련 :tb_product, tb_order, tb_order_detail
	int order_id;//발주고유번호
	int order_status;//발주상태
	int order_detail_id;//발주 품목의 고유번호
	int product_id;//tb_product.productid
	int quantity;//수량
	int product_price;//개당 가격
	int product_name;//품목 이름
	
	

}
