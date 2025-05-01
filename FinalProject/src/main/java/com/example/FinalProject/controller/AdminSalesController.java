package com.example.FinalProject.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.FinalProject.dto.AdminSalesDto;
import com.example.FinalProject.service.SalesService;



@RestController
public class AdminSalesController {
	@Autowired SalesService salesservice;
	
	//매출 내용 가져오기(조건별 검색)
	@GetMapping("/sales")
	public AdminSalesDto getSalesList(
			@RequestParam(required = false) Integer userId,
		    @RequestParam(required = false) List<String> checkedItems,
		    @RequestParam(required = false, defaultValue="1") int pageNum
		    ) {
		System.out.println("컨트롤러 작동");
		System.out.println(userId);
		System.out.println(checkedItems);
		System.out.println(pageNum);

		return salesservice.getAdminSalesList(pageNum, userId, checkedItems);
	}
	
	//매출 내용 추가하기
	@PostMapping("/sales")
	public Map<String, Object> addSale(@RequestBody AdminSalesDto dto){
		Map<String, Object> map =new HashMap<>();
		return map;
	}
	
	//매출 내용 수정하기
	@PatchMapping("/sales/{adminSaleId}")
	public Map<String, Object> editSale(@RequestBody AdminSalesDto dto){
		Map<String, Object> map =new HashMap<>();
		return map;
	}
	
	//매출 내용 삭제하기
	@DeleteMapping("/sales/{adminSaleId}")
	public Map<String, Object> deleteSale(){
		Map<String, Object> map =new HashMap<>();
		return map;
	}
	
	
	//연도별 월 매출
	@GetMapping("/sales/YearlySaleStat")
	public void getYearlySaleStat() {
		
	}
	
	//연도의 과목별 매출, 그 연도의 특정월의 과목별 매출
	
	
	
}
