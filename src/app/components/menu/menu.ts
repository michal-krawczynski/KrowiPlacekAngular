import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@Component({
  selector: 'app-menu',
  imports: [HttpClientModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit {
  burgers: any;
  response: any;
  api_url: string = 'http://localhost:8000';
  constructor(private http: HttpClient) {
  }
  ngOnInit() {

    this.callApi()

  }
  callApi(): void {
    this.http.get(this.api_url + '/api/burgers/').subscribe(res => {
      this.burgers = res;
    })
  }
}
