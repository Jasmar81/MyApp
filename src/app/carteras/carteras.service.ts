import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarterasService { // Ajustado el nombre de la clase

  public carteras = [
    { 
      id: '1',
      title: 'Bandoleros Medianos',
      imageURL: '../../assets/medianos.jpeg',
      comments: ['Perfectos para ti']
    },
    { 
      id: '2',
      title: 'Bandoleros pequeños',
      imageURL: '../../assets/mini.jpeg',
      comments: ['Como lo quieras']
    }
  ];

  
  getCarteras() {
    return [...this.carteras];
  }

 getCartera(carteraId: string) {
    return this.carteras.find(cartera => {
      return cartera.id === carteraId;
    });
  }
  

  // Agrega esta función dentro de la clase de tu CarterasService
addCartera(title: string, imageURL: string, comment: string) {
  const nuevaCartera = {
    id: (this.carteras.length + 1).toString(), // Le genera un ID automático (Ej: "3")
    title: title,
    imageURL: imageURL,
    comments: comment ? [comment] : [] // Guarda el comentario en un arreglo de textos
  };

  this.carteras.push(nuevaCartera); // 👈 Inserta el nuevo objeto dentro del arreglo real
  console.log('Arreglo actualizado en el servicio:', this.carteras);
}

  deleteCartera(carteraId: string) {
    // Corregido: Asegurado que la variable coincida (carteraId)
    this.carteras = this.carteras.filter(cartera => {
      return cartera.id !== carteraId;
    }); 
  }


}