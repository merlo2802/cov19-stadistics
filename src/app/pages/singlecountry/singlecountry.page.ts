import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-singlecountry',
  templateUrl: './singlecountry.page.html',
  styleUrls: ['./singlecountry.page.scss'],
})
export class SinglecountryPage implements OnInit {
  @ViewChild('lineCanvas', {static: true}) lineCanvas;
  lineChart: any;
  constructor(private router: Router) { }
  dashboardPage()
  {
	  this.router.navigate(['dashboard'])
  }
  profilePage()
  {
	  this.router.navigate(['profile'])
  }
  ngOnInit() {
  this.linechart();
  }
   linechart()
   {
   
 this.lineChart = new Chart(this.lineCanvas.nativeElement, {
 
  type: 'line',
  data: {
    labels: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    datasets: [{
	  borderWidth: 2,
	  borderColor:"#dc3545",
	  pointBorderWidth: 0,
      pointHoverRadius: 0,
	  lineTension: 0,  
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 0,
      pointRadius: 0,
      pointHitRadius: 0,
      data: [65, 50, 80, 90, 56, 85, 50],
      fill: false
    },
	{
	  
	   borderColor: "#99abb5",
       borderWidth: 1,
       borderDash: [3, 5],
	   pointBorderWidth: 0,
       pointHoverRadius: 0,
	   lineTension: 0,
       pointHoverBackgroundColor: "rgba(75,192,192,1)",
       pointHoverBorderColor: "rgba(220,220,220,1)",
       pointHoverBorderWidth: 0,
       pointRadius: 0,
       pointHitRadius: 0,
	   data: [40, 60, 70, 64, 89, 50, 69],
       fill: false
	}
	
	]
  },
options: {
    responsive: true,
	animation: {

        duration: 1000,

		easing:'linear'

    },
	legend: {
            display: false
         },
         tooltips: {
            enabled: false
         },
    scales: {
      xAxes: [{
	  display: false,
		   gridLines: {
                display: false
            },
        ticks: {
        
        }
      }],
      yAxes: [{
		  
        display: false
      }]
    }
  }
 });

   }
}
