package com.example.FinalProject.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.FinalProject.dto.AdminSalesDto;
import com.example.FinalProject.mapper.AdminSalesMapper;

@Service
public class AdminSalesServiceImpl implements AdminSalesService{

	@Autowired AdminSalesMapper mapper;
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
	public List<AdminSalesDto> getMonthlyByLecture(int lecture_id) {

		return null;
	}

	@Override
	public List<AdminSalesDto> getYealryByLecture(int lecture_id) {

		return null;
	}

	@Override
	public List<AdminSalesDto> getListHalf() {

		return null;
	}

	@Override
	public List<AdminSalesDto> getListHalfByClass() {

		return null;
	}

	@Override
	public List<AdminSalesDto> getListHalfByLecture() {
		
		return null;
	}

	@Override
	public List<AdminSalesDto> getListCost(String sales_date) {
		
		return null;
	}
	
}
