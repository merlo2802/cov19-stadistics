import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-symptom',
  templateUrl: './symptom.page.html',
  styleUrls: ['./symptom.page.scss'],
})
export class SymptomPage implements OnInit {

  constructor(private router: Router) { }
   testyourselfPage()
   {
	   this.router.navigate(['testyourself'])
   }
   profilePage()
  {
	  this.router.navigate(['profile'])
  }
  ngOnInit() {
  }

}
