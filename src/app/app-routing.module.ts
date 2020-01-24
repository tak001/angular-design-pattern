import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdapterExtendsComponent } from './adapter-extends/adapter-extends.component';
import { AdapterTransferComponent } from './adapter-transfer/adapter-transfer.component';
import { FactoryMethodComponent } from './factory-method/factory-method.component';
import { TemplateMethodComponent } from './template-method/template-method.component';

const routes: Routes = [
  { path: 'templatemethod', component: TemplateMethodComponent },
  { path: 'factorymethod', component: FactoryMethodComponent },
  { path: 'adapterextends', component: AdapterExtendsComponent },
  { path: 'adaptertransfer', component: AdapterTransferComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
