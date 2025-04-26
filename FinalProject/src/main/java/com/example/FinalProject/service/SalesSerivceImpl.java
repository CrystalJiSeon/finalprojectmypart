package com.example.FinalProject.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.FinalProject.dto.AdminSalesDto;
import com.example.FinalProject.mapper.AdminSalesMapper;

@Service
public class SalesSerivceImpl implements SalesService{
	//한 페이지에 몇개씩 표시할 것인지
	final int PAGE_ROW_COUNT=10;
	//하단 페이지를 몇개씩 표시할 것인지
	final int PAGE_DISPLAY_COUNT=10;
	
	
	@Autowired AdminSalesMapper salesmapper;
	
	private static final Map<String, String> codeMap = Map.of(
		    "수업료 수입", "CLS",
		    "기타 수입", "C_ETC",
		    "강사 월급", "SALARY",
		    "발주 비용", "ITEM",
		    "기타 지출", "ETC"
		);
	
	//매출 관리 리스트 : 검색 조건을 받아 일단은 리스트 불러오기(페이징 처리 해야함)
	public List<AdminSalesDto> getAdminSales() {
	    return salesmapper.getAdminSales();
	}
	
	public List<AdminSalesDto> getAdminSalesList(String store_name, List<String> b_codes) {
	    if(b_codes==null) {
	    	return salesmapper.getAdminSales();
	    }else{
	    	Map<String, Object> search = new HashMap<>();
		    search.put("store_name", store_name);
		    // b_codes가 있으면 매핑 후 조건 추가
		    List<String> mappedCodes = b_codes.stream()
		        .map(codeMap::get)
		        .filter(Objects::nonNull)
		        .collect(Collectors.toList());

		    search.put("b_codes", mappedCodes);

		    return salesmapper.getAdminSalesList(search);
	    }

	}

	
	
//	@Override
//	public void insertRevenueByClass(int classid, String storename, String acode, String bcode) {
//		int studentCount = studentClassMapper.countByClassId(classid);
//	    int classPrice = classMapper.getPriceByClassId(classid);
//	    String classname = classMapper.getNameByClassId(classid);
//	    
//	    String salename = classname + " 수업 수익";
//	    int totalRevenue = studentCount * classPrice;
//
//	    SalesDto dto = new SalesDto();
//	    dto.setStorename(storename);
//	    dto.setSalename(salename);
//	    dto.setPrice(totalRevenue);
//	    dto.setAcode(acode);
//	    dto.setBcode(bcode);
//
//	    salesmapper.insertOrderApprovedCost(dto);
//		
//	}

}
