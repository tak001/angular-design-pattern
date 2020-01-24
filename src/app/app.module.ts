import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdapterExtendsComponent } from './adapter-extends/adapter-extends.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FactoryMethodComponent } from './factory-method/factory-method.component';
import { HeaderComponent } from './layout/header/header.component';
import { TemplateMethodComponent } from './template-method/template-method.component';
import { AdapterTransferComponent } from './adapter-transfer/adapter-transfer.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, TemplateMethodComponent, FactoryMethodComponent, AdapterExtendsComponent, AdapterTransferComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
