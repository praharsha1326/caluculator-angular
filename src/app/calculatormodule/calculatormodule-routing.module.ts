import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorcompComponent } from './calculatorcomp/calculatorcomp.component';

const routes: Routes = [
  {
    path:'',
    component: CalculatorcompComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculatormoduleRoutingModule { }
