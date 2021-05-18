import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Expense } from '../models/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  [x: string]: any;

 
  private geturl: string = "http://localhost:8080/api/v1/expenses";
  getUrl: any;

  constructor(private _httpClient: HttpClient) { }

    getExpenses(): Observable<Expense[]>{

      return this._httpClient.get<Expense[]>(this.geturl).pipe(
        map(response => response)
      )
    }

    saveExpense(expense: Expense): Observable<Expense>{
      return this._httpClient.post<Expense>(this.geturl,expense)
    }

    getExpense(id: number): Observable<Expense> {
       return this._httpClient.get<Expense>(`${this.geturl}/${id}`).pipe(map(response => response))
    }
    deleteExpense(id: number): Observable<any> {
      return this._httpClient.delete(`${this.geturl}/${id}`,{responseType: 'text'});
   }
}