import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Headers, RequestOptions, URLSearchParams, Http } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Busca API ML';
  results: any;
  @ViewChild('f')
  formulario: NgForm;

  constructor(private http: Http) {}

  ngOnInit(): void {}
  
  buscarProduto() {
  	let headers = new Headers({'Content-Type': 'application/json'});

  	let params = new URLSearchParams();
  	params.set('q', this.formulario.value.busca);

  	let options = new RequestOptions({
  		headers: headers,
  		params: params
  	});
  	
  	this.http.get('https://api.mercadolibre.com/sites/MLB/search', options).subscribe(data => {
  		let response = data.json();
  		this.results = response['results'];
  	});
  }
}
