import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {HttpService} from '../../services/http-service';

@Component({
  selector: 'app-menu',
  imports: [NgForOf, NgIf],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class Menu implements OnInit {
  burgers: any;
  constructor(private http: HttpService) {
  }
  ngOnInit() {

    this.callApi()

  }
  callApi(): void {
    this.http.get('burgers/').subscribe(res => {
      this.burgers = res;
    })
  }
}
