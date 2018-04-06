import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { SalesComponent } from './component/sales/sales.component';
import { SalesService } from './services/sales.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [SalesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
