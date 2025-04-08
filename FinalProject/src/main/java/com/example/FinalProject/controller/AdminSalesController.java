package com.example.FinalProject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.FinalProject.service.SalesService;



@RestController
public class AdminSalesController {
	@Autowired SalesService service;
	
	
}
