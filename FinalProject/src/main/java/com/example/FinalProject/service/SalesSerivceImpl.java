package com.example.FinalProject.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.FinalProject.dto.SalesDto;
import com.example.FinalProject.mapper.SalesMapper;

public class SalesSerivceImpl implements SalesService{
	@Autowired SalesMapper salesmapper;
	@Override
	public void insertRevenueByClass(int classid, String storename, String acode, String bcode) {
//		int studentCount = studentClassMapper.countByClassId(classid);
//	    int classPrice = classMapper.getPriceByClassId(classid);
//	    String classname = classMapper.getNameByClassId(classid);
	    
//	    String salename = classname + " 수업 수익";
//	    int totalRevenue = studentCount * classPrice;

//	    SalesDto dto = new SalesDto();
//	    dto.setStorename(storename);
//	    dto.setSalename(salename);
//	    dto.setPrice(totalRevenue);
//	    dto.setAcode(acode);
//	    dto.setBcode(bcode);

//	    salesmapper.insertOrderApprovedCost(dto);
		
	}

}
