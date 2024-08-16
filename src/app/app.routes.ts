import { Routes } from '@angular/router';
import { LoginComponent } from './budget-planner/login/login.component';
import { DasboardComponent } from './budget-planner/dasboard/dasboard.component';

export const routes: Routes = [
  
 {path: 'budget-planner', loadChildren:()=> import('./budget-planner/budget-planner.module') .then( m => m .BudgetPlannerModule)}
,

{ path: 'dashboard', component: DasboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Redirect to 'dashboard' by default
  { path: '**', redirectTo: '/dashboard' }
];