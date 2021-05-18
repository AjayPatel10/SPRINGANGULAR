import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http"
import { RouterModule, Routes } from "@angular/router"
import { AppComponent } from './app.component';
import { ListexpenseComponent } from './components/listexpense/listexpense.component';
import { AddExpenseComponent } from './components/add-expense/add-expense.component';
import{FormsModule} from "@angular/forms"
const routers : Routes=[
    {path: 'expenses', component: ListexpenseComponent},
    {path: 'addExpense', component: AddExpenseComponent},
    {path: 'editExpense/:id', component: AddExpenseComponent},
    {path: '', redirectTo: '/expenses', pathMatch: 'full'}
] 

@NgModule({
  declarations: [
    AppComponent,
    ListexpenseComponent,
    AddExpenseComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routers),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
