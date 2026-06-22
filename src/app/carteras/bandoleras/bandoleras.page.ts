import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CarterasService } from '../carteras.service';
import { 
  IonContent, IonHeader, IonTitle, IonToolbar, 
  IonImg, IonList, IonItem, IonLabel, IonButtons, IonBackButton,
  IonGrid, IonRow, IonCol, IonIcon, IonInput, IonTextarea, IonButton 
} from '@ionic/angular/standalone';
import { trash } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-bandoleras',
  templateUrl: './bandoleras.page.html',
  styleUrls: ['./bandoleras.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    IonContent, IonHeader, IonTitle, IonToolbar, 
    IonImg, IonList, IonItem, IonLabel, IonButtons, IonBackButton,
    IonGrid, IonRow, IonCol, IonIcon, IonInput, IonTextarea, IonButton
  ]
})
export class BandolerasPage implements OnInit {

  public carteras: any;
  public carteraForm!: FormGroup; // Formulario reactivo listo

  constructor(
    private activatedRoute: ActivatedRoute,
    private carterasService: CarterasService
  ) {
    // Registramos el icono de la papelera
    addIcons({ trash });
  }

  ngOnInit() {
    // Inicializamos los campos del formulario
    this.carteraForm = new FormGroup({
      title: new FormControl('', Validators.required),      
      comment: new FormControl('')
    });

    // Recuperamos el ID de la cartera desde la URL
    this.activatedRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('carteraId') || paramMap.get('carterasid');
      console.log('ID recuperado con éxito:', id);

      if (id) {
        this.carteras = this.carterasService.getCartera(id);
        console.log('Datos de la cartera cargados:', this.carteras);
      } else {
        console.error('No se pudo encontrar ningún ID en la URL.');
      }
    });
  }

  // 🗑️ ¡AQUÍ ESTÁ LA FUNCIÓN DE VUELTA! Evita el error TS2339
  eliminarCartera() {
    console.log('Eliminando la cartera:', this.carteras?.id);
    if (this.carteras?.id) {
      this.carterasService.deleteCartera(this.carteras.id);
    }
  }

  // Busca esta función en tu bandoleras.page.ts y reemplázala completa:
  guardarCartera() {
    if (this.carteraForm.valid) {
      // 1. Extraemos los valores del formulario
      const { title, imageURL, comment } = this.carteraForm.value;

      // 2. Se los enviamos al servicio para que los guarde en el arreglo principal
      this.carterasService.addCartera(title, imageURL, comment);

      // 3. Limpiamos las casillas del formulario para que quede vacío de nuevo
      this.carteraForm.reset();

      alert('¡Cartera agregada con éxito al catálogo!');
    }
  }

}