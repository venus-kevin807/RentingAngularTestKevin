import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Ubicacion } from './models/ubicacion';
import { UbicacionService } from './ubicacion/services/ubicacion.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterModule]
})
export class AppComponent implements OnInit {
  ubicaciones: Ubicacion[] = [];
  loading: boolean = false;
  error: string = '';

  constructor(private ubicacionService: UbicacionService) {}

  ngOnInit(): void {
    this.ubicacionService.getUbicaciones().subscribe((data: Ubicacion[]) => {
      this.ubicaciones = data;
    });
  }

  fetchUser(id: number) {
    this.loading = true;
    this.ubicacionService.getUbicacion(id).subscribe(
      (data: Ubicacion[]) => {
        this.ubicaciones = data;
        this.loading = false;
      },
      (error) => {
        this.error = 'Error fetching user data';
        this.loading = false;
      }
    );
  }
}
