import { Component, OnInit } from '@angular/core';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-listexpense',
  templateUrl: './listexpense.component.html',
  styleUrls: ['./listexpense.component.css']
})
export class ListexpenseComponent implements OnInit {

  expenses : Expense[] = [];

  constructor(private _expenseService :ExpenseService) { 

  }

  ngOnInit(): void 
  {
    this._expenseService.getExpenses().subscribe(
      data => this.expenses =data
    )
  }

}
