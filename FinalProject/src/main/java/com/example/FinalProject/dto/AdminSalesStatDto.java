package com.example.FinalProject.dto;
import java.util.List;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Alias("AdminSalesStatDto")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class AdminSalesStatDto {
	//String sDate;//문자열로 변환된 date 타입의 data
	private String sMonth;//상동  
	private String sYear;//상동
	private String lectureName;
	private long cost;
	private long profit; 
}
