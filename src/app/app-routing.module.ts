import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateMethodComponent } from './template-method/template-method.component';


const routes: Routes = [
  { path: 'templatemethod', component: TemplateMethodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
