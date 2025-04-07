package com.example.FinalProject.dto;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Alias("OrderHeaderDto")	
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class OrderHeaderDto {
	private int product_id;
	private String product_name;
	private String unit;
	private int price;
}
