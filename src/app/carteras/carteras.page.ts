import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonContent, IonList, IonItem, IonAvatar, IonLabel, IonImg, IonHeader, IonToolbar, IonTitle} from '@ionic/angular/standalone';
import { CarterasService } from './carteras.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-carteras',
  templateUrl: './carteras.page.html',
  styleUrls: ['./carteras.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonTitle, IonList, IonItem, 
    IonAvatar, IonLabel, IonImg, RouterLink,]
})

export class CarterasPage implements OnInit {


  public carteras: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private carterasService: CarterasService
  ) { }

  ngOnInit() {

    this.carteras = this.carterasService.getCarteras(); 
    console.log(this.carteras);
  }
}