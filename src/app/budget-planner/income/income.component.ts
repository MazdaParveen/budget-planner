import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-income',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './income.component.html',
  styleUrl: './income.component.scss'
})
export class IncomeComponent {
   incomeForm: any;
   selectedMonth: any;
   januaryIncome: any[] = [
    { source: 'Salary', amount: 5000, investments: '401(k)'},
        { source: 'Freelancing', amount: 1000, investments: 'Stocks'},
   ];
   februaryIncome: any[] = [
        { source: 'Salary', amount: 5000, investments: '401(k)'},
          { source: 'Rental Incom', amount: 600, investments: 'Real Estate'},
   ];
   marchIncome: any[] = [
        { source: 'Salary', amount: 5200, investments: '401(k)'},
        { source: 'Freelancing', amount: 1600, investments: 'Stocks'},
          { source: 'Rental Incom', amount: 1600, investments: 'Real Estate'},
   ];
   monthSelected:boolean=false;

   constructor(public fb:FormBuilder, public router:Router){
    const currentDate = new Date();
    this.selectedMonth = currentDate.toLocaleDateString('default', { month: 'long'});
   }
  ngOnInit(): void {
    this.incomeForm = this.fb.group({
      month: ['', Validators.required],
      source: ['', Validators.required],
      amount: ['', Validators.required],
      investments: ['', Validators.required]
    }); 
  }

  onChange(event:any){
    this.selectedMonth= event.target.value
    this.monthSelected=true;
    this.getFilteredIncome();
  }

calculateTotalIncome(month: string): number{
   let totalIncome = 0;
   for ( const income of this.getIncomesForMonth(month)){
    totalIncome += income.amount;
   }
   return totalIncome;
}

getIncomesForMonth(month: string): any[] {
 switch (month){
  case 'january':
    return this.januaryIncome;
    case 'febuary':
      return this.februaryIncome;
      case 'march':
        return this.marchIncome;
        default:
          return[];
 }
}


  getFilteredIncome(){
    let filteredIncome: any[] = [];
    switch(this.selectedMonth){
      case 'january':
        filteredIncome = [...this.januaryIncome];
        break;
        case 'february':
         filteredIncome = [...this.februaryIncome];
         break;
         case 'march':
          filteredIncome = [...this.marchIncome];
          break;
          default:
          break; 
    }
    return filteredIncome;
  }

  onSubmit(){
    if(this.incomeForm.valid){
      const newIncome = this.incomeForm.value;
      switch(this.selectedMonth){
      case 'january':
      this.januaryIncome.push(newIncome);
      break;
      case 'February':
        this.februaryIncome.push(newIncome);
        break;
        case 'March':
          this.marchIncome.push(newIncome);
          break;
          default:
            break;
    }
    this.incomeForm.reset();
    this.incomeForm.patchValue({month:'', source: '', amount:'', investments:''});
  }
}

  saveForm(){
    console.log("Form saved!");
  }

  onBack(){
        this.router.navigate(['/budget-planner/dasboard'])

  }
}
