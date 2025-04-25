package com.example.FinalProject.dto;

import java.util.List;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
@Alias("SalesSearchDto")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class SalesSearchDto {
	private String sMonth;//문자열로 변환된 날짜(연-월)  
	private String sYear;//문자열로 변환된 날짜(연도)
	private List<String> b_codes;
}
