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
	public List<AdminSalesDto> salesList(
			@RequestParam(required = false) String store_name,
		    @RequestParam(required = false) List<String> b_codes) {
		
		return salesservice.getAdminSalesList(store_name,b_codes);
	}
	
}
