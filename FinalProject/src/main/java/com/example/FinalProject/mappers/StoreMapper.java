package com.example.FinalProject.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.FinalProject.dto.StoreDto;

@Mapper
public interface StoreMapper {
	int insertStore(StoreDto dto);
	int deleteStore(int storeNum);
	int updateStore(StoreDto dto);
	List<StoreDto> getStoreList();
}
