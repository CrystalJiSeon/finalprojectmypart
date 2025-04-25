package com.example.FinalProject.dto;

import java.util.List;
import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Alias("AdminSalesListDto")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class AdminSalesListDto {
	private List<AdminSalesDto> saleslist;
	//검색 조건 : bcode 1개~5개의 배열
	private List<String> b_codes;
	private List<AdminSalesDto> list;
	private int startPageNum;
	private int endPageNum;
	private int totalPageCount;
	private int pageNum;
	private int totalRow;

}
