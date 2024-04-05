import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OnInit } from '@angular/core';
import '@picocss/pico'
import axios from 'axios';



@Component({
  selector: 'app-livres',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <div class="container">
      <h1>Liste des livres</h1>

      <div class="livres-grid">
        <a href="http://localhost:4200/livre/{{ livre.id }}" *ngFor="let livre of livreList" class="livre-link">
          <div class="livre-card">
            <img [src]="livre.image" alt="img" class="livre-image">
            <div class="livre-details">
              <h2 class="livre-title">{{ livre.title }}</h2>
              <p class="livre-author">{{ livre.author }}</p>
            </div>
          </div>
        </a>
      </div>
      <a href="http://localhost:4200/addlivre" class="add-livre-button">+</a>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
    }

    h1 {
      text-align: center;
      margin-bottom: 20px;
      font-size: 2rem;
      color: #333;
    }

    .livres-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
    }

    .livre-link {
      color: inherit;
      text-decoration: none;
    }

    .livre-card {
      background-color: #fff;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      overflow: hidden;
      transition: transform 0.3s ease;
    }

    .livre-card:hover {
      transform: translateY(-5px);
    }

    .livre-image {
      width: 100%;
      height: auto;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
    }

    .livre-details {
      padding: 20px;
    }

    .livre-title {
      margin-bottom: 10px;
      font-size: 1.2rem;
      color: #333;
    }

    .livre-author {
      font-size: 1rem;
      color: #666;
    }

    .add-livre-button {
      position: fixed;
      bottom: 20px;
      right: 20px;
      background-color: #007bff;
      color: #fff;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      font-size: 2rem;
      line-height: 50px;
      text-align: center;
      text-decoration: none;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transition: background-color 0.3s ease;
    }

    .add-livre-button:hover {
      background-color: #0056b3;
    }
  `]
})

export class LivresComponent implements OnInit {
  livreList: any[] = [];

  constructor() { }

  ngOnInit(): void {
    axios.get<any>('http://localhost:8000/api/livres')
      .then(response => {
        const livresData = response.data['hydra:member']; // Accéder aux membres de la collection
        
        // Mapper les données correctement
        this.livreList = livresData.map((item: any) => {
          return {
            id: item.id,
            title: item.title,
            author: item.author, // Utiliser le champ correct pour l'auteur
            image: item.image, // Utiliser le champ correct pour l'image
            // Autres propriétés à mapper si nécessaire
          };
        });
      })
      .catch(error => {
        console.error('Une erreur est survenue lors de la récupération des données : ', error);
      });
  }
}
