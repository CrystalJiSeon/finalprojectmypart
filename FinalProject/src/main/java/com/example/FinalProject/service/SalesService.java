package com.example.FinalProject.service;

import java.util.List;

import com.example.FinalProject.dto.AdminSalesDto;
import com.example.FinalProject.dto.AdminSalesListDto;

public interface SalesService {
	//매출 관리 리스트 : 검색 조건을 받아 한 페이지에 10개를 띄워주는 리스트를 만든다.
	public AdminSalesDto getAdminSalesList(int pageNum, String store_name, List<String> b_codes);
	
	
	//	public void insertRevenueByClass(int classid, String storename, String acode, String bcode); 

}
