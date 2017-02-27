import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ExporttoexcelComponent } from  './exporttoexcel.component/exporttoexcel.component';
//import 'script-loader!../../../node_modules/xlsx/dist/xlsx.full.min.js';

@NgModule({
  declarations: [
    AppComponent,
	ExporttoexcelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
