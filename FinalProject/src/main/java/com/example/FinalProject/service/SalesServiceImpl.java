package com.example.FinalProject.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.FinalProject.dto.AdminSalesDto;

@Service
public class SalesServiceImpl implements SalesService{

	@Override
	public int addSales(AdminSalesDto dto) {
		
		return 0;
	}

	@Override
	public int updateSales(AdminSalesDto dto) {
		
		return 0;
	}

	@Override
	public int deleteSales(int sales_id) {
		
		return 0;
	}
	@Override
	public List<AdminSalesDto> getListDaily(String sales_date) {
		
		return null;
	}

	@Override
	public List<AdminSalesDto> getListMonthly(String sales_date) {
		
		return null;
	}

	@Override
	public List<AdminSalesDto> getListYearly(String sales_date) {
		
		return null;
	}

	@Override
	public List<AdminSalesDto> getMonthlyByClass(int class_id) {
		
		return null;
	}

	@Override
	public List<AdminSalesDto> getYealryByClass(int class_id) {
		
		return null;
	}

	@Override
	public List<AdminSalesDto> getListCost(String sales_date) {
		
		return null;
	}


	
}
