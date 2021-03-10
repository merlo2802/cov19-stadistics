import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-live',
  templateUrl: './live.page.html',
  styleUrls: ['./live.page.scss'],
})
export class LivePage implements OnInit {

  constructor(private router: Router) { }
    singlecountryPage()
  {
  this.router.navigate(['singlecountry'])
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
