package com.example.FinalProject.service;

import java.util.List;

import com.example.FinalProject.dto.AdminSalesDto;


public interface SalesService {
	public List<AdminSalesDto> getListDaily(String sales_date);
	public List<AdminSalesDto> getListMonthly(String sales_date);
	public List<AdminSalesDto> getListYearly(String sales_date);
	public List<AdminSalesDto>
}
