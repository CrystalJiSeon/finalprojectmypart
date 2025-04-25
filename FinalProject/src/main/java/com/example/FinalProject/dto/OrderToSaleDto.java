package com.example.FinalProject.dto;
import java.util.List;

import org.apache.ibatis.type.Alias;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Alias("OrderToSaleDto")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Data
public class OrderToSaleDto {
	private String status;//진행중
	private String store_name;//매장번호 = tb_user.storename
	private int order_id;//발주 아이디
	private int order_status;//발주상태
	private int order_detail_id;//발주 품목의 고유번호
	private int product_id;//tb_product.productid
	private int quantity;//수량
	private int product_price;//개당 가격
	private int product_total;//품목별 총액
	private int product_name;//품목 이름
	private int sale_name;
}
