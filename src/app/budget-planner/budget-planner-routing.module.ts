import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DasboardComponent } from './dasboard/dasboard.component';
import { IncomeComponent } from './income/income.component';
import {  ExpenceComponent } from './expence/expence.component';
import { TodoComponent } from './todo/todo.component';
import { HistoryComponent } from './history/history.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path: 'dasbord', component: DasboardComponent},
  {path: 'side-nav', component: SideNavComponent},
  {path: 'income' , component: IncomeComponent},
  {path: 'expence', component: ExpenceComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'history', component: HistoryComponent},
  {path: 'profile', component: ProfileComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BudgetPlannerRoutingModule { }
