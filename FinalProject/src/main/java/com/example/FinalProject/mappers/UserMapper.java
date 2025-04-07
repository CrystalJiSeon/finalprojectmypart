package com.example.FinalProject.mappers;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.example.FinalProject.dto.UserDto;

@Mapper
public interface UserMapper {
	List<UserDto> getUserList();
	List<UserDto> getUserListByStorNum(int storeNum);
}
