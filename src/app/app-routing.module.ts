import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FactoryMethodComponent } from './factory-method/factory-method.component';
import { TemplateMethodComponent } from './template-method/template-method.component';

const routes: Routes = [
  { path: 'templatemethod', component: TemplateMethodComponent },
  { path: 'factorymethod', component: FactoryMethodComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
