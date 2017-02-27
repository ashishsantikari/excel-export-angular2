import { Component } from '@angular/core';
import { ExporttoexcelComponent } from  './exporttoexcel.component/exporttoexcel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  someData : any  = [
	  {name : "Ashish Santikari" , technology : "OO JavaScript"},
	  {name : "Ashish Santikari" , technology : "Angular 1"},
	  {name : "Ashish Santikari" , technology : "Angular 2"} 
  ];
}
