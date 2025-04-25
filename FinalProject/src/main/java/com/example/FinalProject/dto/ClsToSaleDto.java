package com.example.FinalProject.dto;
import java.util.List;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Alias("ClsToSaleDto")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class ClsToSaleDto {
	private String status;//진행중
	private String store_name;//매장번호 = tb_user.storename
	private int class_id;//수업 아이디
	private String class_name;
	private String sale_name;
	private int student_count;
	private int price;//수업 아이디에 따른 수업료
	private int totprice;//수업료 총액
	private String a_code;//구분코드:수입
	private String b_code;//상세구분코드:수업료수입
}