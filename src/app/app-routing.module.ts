import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    loadChildren: ()=>
      import('./calculatormodule/calculatormodule.module').then((m)=>m.CalculatormoduleModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
