import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testyourself',
  templateUrl: './testyourself.page.html',
  styleUrls: ['./testyourself.page.scss'],
})
export class TestyourselfPage implements OnInit {

  constructor(private router: Router) { }
   symptomPage()
  {
  this.router.navigate(['symptom'])
  }
  dashboardPage()
  {
	  this.router.navigate(['dashboard'])
  }
  profilePage()
  {
	  this.router.navigate(['profile'])
  }
  ngOnInit() {
  }

}
