package com.example.FinalProject.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.FinalProject.dto.AdminSalesDto;
import com.example.FinalProject.dto.AdminSalesListDto;
import com.example.FinalProject.mapper.AdminSalesMapper;

@Service
public class SalesSerivceImpl implements SalesService{
	//한 페이지에 몇개씩 표시할 것인지
	final int PAGE_ROW_COUNT=10;
	//하단 페이지를 몇개씩 표시할 것인지
	final int PAGE_DISPLAY_COUNT=10;
	
	
	@Autowired AdminSalesMapper salesmapper;
	
	
	//매출 관리 리스트 : 검색 조건을 받아 일단은 리스트 불러오기(페이징 처리 해야함)

	public AdminSalesDto getAdminSalesList(int pageNum, Integer userId, List<String> checkedItems) {
		//보여줄 페이지의 시작 ROWNUM
		int startRowNum=1+(pageNum-1)*PAGE_ROW_COUNT;
		//보여줄 페이지의 끝 ROWNUM
		int endRowNum=pageNum*PAGE_ROW_COUNT;
		
		//하단 시작 페이지 번호 
		int startPageNum = 1 + ((pageNum-1)/PAGE_DISPLAY_COUNT)*PAGE_DISPLAY_COUNT;
		//하단 끝 페이지 번호
		int endPageNum=startPageNum+PAGE_DISPLAY_COUNT-1;
		//전체 글의 갯수
		int totalRow;
		// 검색 조건 및 페이징 정보를 Map에 담음
    	Map<String, Object> search = new HashMap<>();
    	search.put("userId", userId);
    	search.put("checkedItems", checkedItems); // b_codes는 null일 수도 있음
    	//startRownum과 endrownum을담 아서 
    	search.put("startRowNum", startRowNum);
    	search.put("endRowNum", endRowNum);
        totalRow = ( checkedItems == null || checkedItems.isEmpty())
                ? salesmapper.getCountDefault()
                : salesmapper.getCount(search);
		//전체 페이지의 갯수 구하기
		int totalPageCount=(int)Math.ceil(totalRow/(double)PAGE_ROW_COUNT);
		//끝 페이지 번호가 이미 전체 페이지 갯수보다 크게 계산되었다면 잘못된 값이다.
		if(endPageNum > totalPageCount){
			endPageNum=totalPageCount; //보정해 준다. 
		}
	
		List<AdminSalesDto> salesList = salesmapper.getAdminSalesList(search); // 항상 이거 사용
        System.out.println(search);
 
        // DTO에 값 설정해서 리턴
        AdminSalesDto dto = new AdminSalesDto();
        dto.setList(salesList);
        dto.setPageNum(pageNum);
        dto.setStartPageNum(startPageNum);
        dto.setEndPageNum(endPageNum);
        dto.setTotalPageCount(totalPageCount);
        dto.setTotalRow(totalRow);
        dto.setStartRowNum(startRowNum);
        dto.setEndRowNum(endRowNum);
        
        System.out.println(dto);
        
        return dto;

	}


	@Override
	public int addAdminSale(AdminSalesDto dto) {
		salesmapper.insertAdminSales(dto);
		return 0;
	}


	@Override
	public int editAdminSale(int adminSaleId) {
		// TODO Auto-generated method stub
		return 0;
	}


	@Override
	public int deleteAdminSale(int adminSaleId) {
		// TODO Auto-generated method stub
		return 0;
	}


	@Override
	public List<String> getSYears(String syear) {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public List<String> getSMonths(String syear) {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public AdminSalesDto getAdminProfitStatByYear() {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public AdminSalesDto getAdminCostStatByYear() {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public AdminSalesDto getAdminSalesStatByLectYearly() {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public AdminSalesDto getAdminSalesStatByLectMonthly() {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	public void insertRevenueByClass(int classid, String storename, String acode, String bcode) {
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
	}

	@Override
	public void insertOrderApprovedCost(AdminSalesDto dto) {
		// TODO Auto-generated method stub
		
	}







	


}
