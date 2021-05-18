package com.example.demo.service;

import java.util.List;
import com.example.demo.model.Demo;

public interface ExpenseService 
{
	 public List<Demo> findAll();

	 Demo save(Demo demo);
	 
	 Demo findById(Long id);
	 
	 
	void delete(Long id);
}
