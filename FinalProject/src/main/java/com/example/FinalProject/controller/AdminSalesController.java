package com.example.FinalProject.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.FinalProject.dto.AdminSalesDto;
import com.example.FinalProject.dto.AdminSalesListDto;
import com.example.FinalProject.service.SalesService;



@RestController
public class AdminSalesController {
	@Autowired SalesService salesservice;
	
	@GetMapping("/sales")
	public AdminSalesDto salesList(
			@RequestParam(required = false) String store_name,
		    @RequestParam(required = false) List<String> checkedItems,
		    @RequestParam(required = false, defaultValue="1") int pageNum
		    ) {
		System.out.println("컨트롤러 작동");
		System.out.println(store_name);
		System.out.println(checkedItems);
		System.out.println(pageNum);

		return salesservice.getAdminSalesList(pageNum, store_name, checkedItems);
	}
	
	@PostMapping("/sales")
	public Map<String, Object> addSale(@RequestBody AdminSalesDto dto){
		Map<String, Object> map =new HashMap<>();
		return map;
	}
}
