import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdapterExtendsComponent } from './adapter-extends/adapter-extends.component';
import { AdapterImplementsComponent } from './adapter-implements/adapter-implements.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacadeComponent } from './facade/facade.component';
import { FactoryMethodComponent } from './factory-method/factory-method.component';
import { HeaderComponent } from './layout/header/header.component';
import { TemplateMethodComponent } from './template-method/template-method.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TemplateMethodComponent,
    FactoryMethodComponent,
    AdapterExtendsComponent,
    AdapterImplementsComponent,
    FacadeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
