import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Expense } from 'src/app/models/expense';
import { ExpenseService } from 'src/app/services/expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  expense :Expense =new Expense();

  constructor(private _expenseServise :ExpenseService,private _router:Router,private _activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

   const isIdPresent= this._activatedRoute.snapshot.paramMap.has('id');
   if(isIdPresent)
   {
    const id = +this._activatedRoute.snapshot.paramMap.has('id');
    this._expenseServise.getExpense(id).subscribe(
    data => this.expense = data
    )
   }
  }

  saveExpense() {
    this._expenseServise.saveExpense(this.expense).subscribe(
      data => {
        console.log('response',data);
        this._router.navigateByUrl("/expenses")
      }
    )
  }
  deleteExpense(id:number)
  {
    this._expenseServise.deleteExpense(id).subscribe(
      data => 
      {
        console.log('delete Respose',data)
        this._router.navigateByUrl("/expenses")
      }
    )
  }
}
