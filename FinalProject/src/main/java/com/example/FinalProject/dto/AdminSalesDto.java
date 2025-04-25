package com.example.FinalProject.dto;

import java.util.List;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Alias("AdminSalesDto")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class AdminSalesDto {
	private int adminsale_id;//지점 adminsale 고유번호
	private String store_name;//매장번호 = tb_user.storename
	private String sale_name;//매출 항목
	private String cre_date;//매출 날짜
	private String edit_date;//매출 수정 날짜
	private int price;//항목 금액
	private String a_code;//구분코드 : 수입/지출
	private String b_code;//상세구분코드 : 수업료수입, 기타수입,강사월급, 발주비용, 기타지출
	private List<String> b_codes;//검색조건
	private String auto;//default: yes(발주나 수업에서 처리됨), no: 담당자가 직접 입력
	private int startRowNum;
	private int endRowNum;
}
