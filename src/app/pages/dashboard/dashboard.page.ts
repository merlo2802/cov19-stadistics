import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  providers: [ApiService]
})
export class DashboardPage implements OnInit {
  fallecidos: number = 0;
  recuperados: number = 0;
  totalCasos: number = 0;
  fecha;

  constructor(
    private router: Router,
    private api: ApiService
  ) {}
  singlecountryPage()
  {
  this.router.navigate(['singlecountry'])
  }
  profilePage()
  {
	  this.router.navigate(['profile'])
  }
  ngOnInit() { 
    this.obtenerTotal();
    this.obtenerMuertes();
    this.obtenerRecuperados();
  }

  obtenerMuertes() {
    this.api.obtenerMuertes().subscribe(data => {
      this.fallecidos = data.deaths;
    })
  }

  obtenerRecuperados() {
    this.api.obtenerRecuperados().subscribe(data => {
      console.log(data)
      this.recuperados = data.recovered;
    })
  }

  obtenerTotal() {
    this.api.obtenerTotal().subscribe(data => {
      console.log(data)
      this.totalCasos = data.confirmed;
      this.fecha = data.dt;
    })
  }

}
