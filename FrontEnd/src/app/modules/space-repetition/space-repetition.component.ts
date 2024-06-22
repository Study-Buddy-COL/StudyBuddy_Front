import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
// import {SidebarComponent} from "../../global/sidebar/sidebar.component";
import {NgOptimizedImage} from "@angular/common";
// import { TopbarComponent } from '../../global/topbar/topbar.component';

@Component({
  selector: 'app-space-repetition',
  standalone: true,
  imports: [
    // SidebarComponent,
    // TopbarComponent,
    NgOptimizedImage,
    CommonModule // CRUCIAL para *NgFor
  ], templateUrl: './space-repetition.component.html',
  styleUrl: './space-repetition.component.css'
})
export class SpaceRepetitionComponent {

  // Datos de las flashcards

  flashcards = [
    { title: 'Flashcard 1', frontText: 'Texto de la cara delantera 1', backText: 'Texto de la cara trasera 1', gradientColor1: '#D0C3F2', gradientColor2: '#b09de0' },
    { title: 'Flashcard 2', frontText: 'Texto de la cara delantera 2', backText: 'Texto de la cara trasera 2', gradientColor1: '#FCB1A6', gradientColor2: '#FCB1A6' },
    { title: 'Flashcard 3', frontText: 'Texto de la cara delantera 3', backText: 'Texto de la cara trasera 3', gradientColor1: '#FFEBCE', gradientColor2: '#FFEBCE' },
    { title: 'Flashcard 4', frontText: 'Texto de la cara delantera 4', backText: 'Texto de la cara trasera 4', gradientColor1: '#724ecd', gradientColor2: '#4D338E' },
    { title: 'Flashcard 5', frontText: 'Texto de la cara delantera 5', backText: 'Texto de la cara trasera 5', gradientColor1: '#b09de0', gradientColor2: '#9C82DE' },
    { title: 'Flashcard 6', frontText: 'Texto de la cara delantera 6', backText: 'Texto de la cara trasera 6', gradientColor1: '#D0C3F2', gradientColor2: '#F25842' },
    { title: 'Flashcard 7', frontText: 'Texto de la cara delantera 7', backText: 'Texto de la cara trasera 7', gradientColor1: '#5E41A7', gradientColor2: '#FFEFB0' },
    { title: 'Flashcard 8', frontText: 'Texto de la cara delantera 8', backText: 'Texto de la cara trasera 8', gradientColor1: '#724ecd', gradientColor2: '#b09de0' },
    { title: 'Flashcard 9', frontText: 'Texto de la cara delantera 9', backText: 'Texto de la cara trasera 9', gradientColor1: '#F25842', gradientColor2: '#FFEFB0' },
];

flipped: boolean = false; // Status de la tarjeta principal
progressPercentage: number = 0;
viewedFlashcards: number = 0;


// Constructor
constructor() {
  this.calculateProgress();
}


// Calculo de porcentaje de progreso de flashcards
calculateProgress() {
  const totalFlashcards = this.flashcards.length;
  this.progressPercentage = Math.round((this.viewedFlashcards / totalFlashcards) * 100);
}

// Flip de la flashcard
toggleFlip() {
  console.log("Card Flipped")
  this.flipped = !this.flipped;
}

// Cambiar de tarjeta
nextCard() {

  if (this.flashcards.length > 1) {
    // Mover el primer elemento al final del arreglo
    const firstCard = this.flashcards.shift(); // Equivalente a Pop

    if (firstCard) {
      this.flashcards.push(firstCard); 

      if (this.viewedFlashcards < this.flashcards.length ) { this.viewedFlashcards++; }

      this.calculateProgress();
    }
  }

  this.flipped = false; // Se vuelve al estado inicial de la tarjeta, sin voltear
}

// Botones clickeados

btnVolume() {
  alert("Btn Volumen Clickeado")
}

btnPencil() {
  alert("Btn Pencil Clickeado")
}


}