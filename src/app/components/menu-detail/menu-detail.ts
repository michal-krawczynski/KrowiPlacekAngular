import {Component, OnInit} from '@angular/core';
import {HttpService} from '../../services/http-service';
import {ActivatedRoute} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-menu-detail',
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './menu-detail.html',
  styleUrl: './menu-detail.css'
})
export class MenuDetail implements OnInit {
  burgers: any;
  burgerId: string = '';
  loading = true;

  constructor(private http: HttpService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.burgerId = this.route.snapshot.paramMap.get('id')!;
    this.getBurger()
  }

  getBurger() {
    this.loading = true;
    this.http.get(`burger/${this.burgerId}/detail/`).subscribe({
      next: res => {
        this.burgers = res;
      },
      error: err => {
        console.error('Błąd pobierania burgera', err);
      },
      complete: () => {
        this.loading = false;
      }
    });
  }
}
