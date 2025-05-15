import { Component, OnInit } from '@angular/core';
import { Ubicacion } from '../models/ubicacion';
import { UbicacionService } from './services/ubicacion.service';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrl: './ubicacion.component.css'
})
export class UbicacionComponent implements OnInit {
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
