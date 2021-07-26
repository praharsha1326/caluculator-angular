import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatormoduleRoutingModule } from './calculatormodule-routing.module';
import { CalculatorcompComponent } from './calculatorcomp/calculatorcomp.component';


@NgModule({
  declarations: [
    CalculatorcompComponent
  ],
  imports: [
    CommonModule,
    CalculatormoduleRoutingModule
  ]
})
export class CalculatormoduleModule { }
