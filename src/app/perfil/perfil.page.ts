// Fíjate en la primera línea: debe incluir OnInit
import { Component, OnInit } from '@angular/core'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonMenuButton 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone: true,
  imports: [
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    IonMenuButton, 
    CommonModule, 
    FormsModule
  ]
})
// Aquí es donde se usa el OnInit que importamos arriba
export class PerfilPage implements OnInit {

  constructor() { }

  ngOnInit() {
    // Código que se ejecuta al iniciar
  }

}