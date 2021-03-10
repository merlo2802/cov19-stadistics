import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {
mySlideOptions={items: 1, dots: true, margin:30, loop:true};
  constructor(private router: Router) { }
  newsdetailsPage()
  {
  this.router.navigate(['newsdetails'])
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
