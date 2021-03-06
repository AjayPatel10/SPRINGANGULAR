package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Demo;
import com.example.demo.repository.ExpenseRep;

@Service
public class ExpenseServiceImp implements ExpenseService
{
	@Autowired
	ExpenseRep expenseRep;

	@Override
    public List<Demo> findAll()
	{	
		return expenseRep.findAll();
	}

	@Override
	public Demo save(Demo demo) {
		
		expenseRep.save(demo);
		return demo;
	}

	@Override
	public Demo findById(Long id) 
	{
		if(expenseRep.findById(id).isPresent())
		{
			return expenseRep.findById(id).get();
		}
		return null;
	}

	@Override
	public void delete(Long id) {
		Demo demo =findById(id);
		expenseRep.delete(demo);
		
	}	
}
