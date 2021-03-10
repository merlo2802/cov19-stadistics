import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
public url1: string = "";
  constructor(private router: Router) { }
   dashboardPage()
  {
  this.router.navigate(['dashboard']);
  }
  liveupdatePage()
  {
  this.router.navigate(['live']);
  }
  testPage()
  {
  this.router.navigate(['testyourself']);
  }
  settingsPage()
  {
  this.router.navigate(['settings']);
  }
  profilePage()
  {
  this.router.navigate(['profile']);
  }
  newsPage()
  {
  this.router.navigate(['news']);
  }
  logoutPage()
  {
	  this.router.navigate(['login'])
  }
  ngOnInit() {
	  
	 this.url1 = this.router.url;   
  }

}
