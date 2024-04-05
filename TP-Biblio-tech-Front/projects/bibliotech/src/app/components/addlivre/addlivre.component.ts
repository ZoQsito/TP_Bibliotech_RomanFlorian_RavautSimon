import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-addlivre',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container">
    <div class="header">
        <h1>Ajouté un Livre</h1>
        <button (click)="goBack()" class="back-button">&#8592; Retour</button>
      </div>
      <form (ngSubmit)="submitForm()" class="add-livre-form">
        <div class="form-row">
          <div class="form-group">
            <label for="title">Titre:</label>
            <input type="text" name="title" [(ngModel)]="livre.title" />
          </div>
          <div class="form-group">
            <label for="author">Auteur:</label>
            <input type="text" name="author" [(ngModel)]="livre.author" />
          </div>
          <div class="form-group">
            <label for="image">URL de l'image:</label>
            <input type="text" name="image" [(ngModel)]="livre.image" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="created_at">Date de création:</label>
            <input type="date" name="created_at" [(ngModel)]="livre.created_at" />
          </div>
          <div class="form-group">
            <label for="updated_at">Date de mise à jour:</label>
            <input type="date" name="updated_at" [(ngModel)]="livre.updated_at" />
          </div>
        </div>
        <div class="form-group">
          <label for="categories">Catégories:</label>
          <div *ngFor="let categorie of categorieList" class="categorie-checkbox">
            <input type="checkbox" [(ngModel)]="categorie.selected" />
            <span class="categorie">{{ categorie.name }}</span>
          </div>
        </div>
        <div class="form-group">
          <label for="resume">Résumé:</label>
          <textarea name="resume" [(ngModel)]="livre.resume"></textarea>
        </div>
        <button type="submit" class="submit-button">Envoyer</button>
      </form>
    </div>
  `,
  styles: [`
  .container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
  }

  .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

  .back-button {
      display: inline-block;
      padding: 10px 20px;
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      font-size: 16px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

  .back-button:hover {
    background-color: #0056b3;
  }

  .add-livre-form .form-row {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
  }

  .add-livre-form .form-group {
    flex: 1 1 33.3333%;
    margin-right: 20px;
  }

  .add-livre-form .form-group:last-child {
    margin-right: 0;
  }

  .add-livre-form label {
    display: block;
    margin-bottom: 5px;
  }

  .add-livre-form input[type="text"],
  .add-livre-form input[type="date"],
  .add-livre-form textarea {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }

  .categorie-checkbox {
    margin-bottom: 5px;
  }

  .submit-button {
      padding: 8px 16px; 
      background-color: #28a745;
      border: none;
      border-radius: 4px;
      color: #fff;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

  .submit-button:hover {
    background-color: #218838;
  }
`]
})
export class AddlivreComponent implements OnInit {
  categorieList: any[] = [];
  livre: any = {};

  constructor(private router: Router) {}

  ngOnInit(): void {
    axios
      .get<any>('http://localhost:8000/api/categories')
      .then((response) => {
        this.categorieList = response.data;
      })
      .catch((error) => {
        console.error('Une erreur est survenue lors de la récupération des données : ', error);
      });
  }

  submitForm(): void {
    const selectedCategoryIds = this.categorieList
      .filter((categorie) => categorie.selected)
      .map((categorie) => categorie.id);
    this.livre.categories = null;

    axios
      .post<any>('http://localhost:8000/api/livres', this.livre, {
        headers: {
          'Content-Type': 'application/ld+json',
        },
      })
      .then((response) => {
        console.log('Données envoyées avec succès : ', response.data);
        this.router.navigate(['/livres']);
      })
      .catch((error) => {
        console.error("Une erreur est survenue lors de l'envoi des données : ", error);
      });
  }

  goBack(): void {
    this.router.navigate(['/livres']);
  }
}
