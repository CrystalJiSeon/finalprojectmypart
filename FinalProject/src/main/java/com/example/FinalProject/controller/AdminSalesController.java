package com.example.FinalProject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.FinalProject.dto.AdminSalesDto;
import com.example.FinalProject.service.SalesService;



@RestController
public class AdminSalesController {
	@Autowired SalesService salesservice;
	
	@GetMapping("/sales")
	public List<AdminSalesDto> salesList(@RequestParam(defaultValue="1") int pageNum, AdminSalesDto dto) {
		
		System.out.println(dto);
		return salesservice.getAdminSalesList(dto.getStore_name(), dto.getB_codes());
	}
	
}
