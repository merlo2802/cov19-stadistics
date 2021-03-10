import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
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
  ngOnInit() {
	  
	  this.url1 = this.router.url;  
  }

}
