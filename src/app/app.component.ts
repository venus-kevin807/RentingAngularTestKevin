import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  styleUrls: './app.component.html',
  imports: [CommonModule, RouterModule]
})
export class AppComponent implements OnInit {
  title = '¡Bienvenido(a)!';

  constructor(private http: HttpClient) {}

  ngOnInit() {
  }
}
