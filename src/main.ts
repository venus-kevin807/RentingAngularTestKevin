import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { HttpClientModule } from '@angular/common/http'; // Importar HttpClientModule
import { importProvidersFrom } from '@angular/core';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(HttpClientModule) // Agregar HttpClientModule como proveedor
  ]
}).catch(err => console.error(err));
