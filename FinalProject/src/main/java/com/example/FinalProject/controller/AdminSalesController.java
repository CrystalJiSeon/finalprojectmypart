package com.example.FinalProject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.FinalProject.dto.AdminSalesListDto;
import com.example.FinalProject.service.SalesService;



@RestController
public class AdminSalesController {
	@Autowired SalesService salesservice;
	
	@GetMapping("/sales")
	public AdminSalesListDto salesList(
			@RequestParam(required = false) int user_id,
		    @RequestParam(required = false) List<String> b_codes,
		    @RequestParam(required = false) int pageNum
		    ) {
		System.out.println("컨트롤러 작동");
		return salesservice.getAdminSalesList(user_id,pageNum, b_codes);
	}
	
}
