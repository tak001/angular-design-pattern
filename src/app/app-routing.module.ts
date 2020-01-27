import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdapterClassComponent } from './adapter-class/adapter-class.component';
import { AdapterInstanceComponent } from './adapter-instance/adapter-instance.component';
import { FacadeComponent } from './facade/facade.component';
import { FactoryMethodComponent } from './factory-method/factory-method.component';
import { TemplateMethodComponent } from './template-method/template-method.component';

const routes: Routes = [
  { path: 'templatemethod', component: TemplateMethodComponent },
  { path: 'factorymethod', component: FactoryMethodComponent },
  { path: 'adapterextends', component: AdapterClassComponent },
  { path: 'adapterimplements', component: AdapterInstanceComponent },
  { path: 'facade', component: FacadeComponent },
  // { path: 'abstractfactory', component: AbstractFactoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
