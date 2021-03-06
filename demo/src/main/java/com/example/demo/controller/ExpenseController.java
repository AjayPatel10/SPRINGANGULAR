package com.example.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.example.demo.model.Demo;
import com.example.demo.service.ExpenseService;

@CrossOrigin("*")
@RestController
//RequestMapping("/api/v1")
public class ExpenseController 
{
	@Autowired
	ExpenseService expenseService;

	@RequestMapping("/")
	public ModelAndView viewHomePage(Model model) {
	    List<Demo> listProducts = expenseService.findAll();
	    return new ModelAndView("index.html","listProducts", listProducts);
	}
	
	@GetMapping("/expenses")
	public ResponseEntity<List<Demo>> get()
	{
		List<Demo> demos = expenseService.findAll();
		return new ResponseEntity<List<Demo>>(demos, HttpStatus.OK);
	}
	@PostMapping("/expenses")
	public ResponseEntity<Demo> save(@RequestBody Demo demo)
	{
		Demo demo2 =expenseService.save(demo);
		return new ResponseEntity<Demo>(demo2,HttpStatus.OK);
	}
	@GetMapping("/expenses/{id}")
	public ResponseEntity<Demo> get(@PathVariable("id") Long id)
	{
		Demo demo2= expenseService.findById(id);
		return new ResponseEntity<Demo>(demo2,HttpStatus.OK);
	}
	@DeleteMapping("/expenses/{id}")
	public ResponseEntity<String> delete(@PathVariable("id") Long id)
	{
		expenseService.delete(id);
		return new ResponseEntity<String>("EXPENSE IS DELETED SuCCESSFULLY",HttpStatus.OK);
	}
}
 