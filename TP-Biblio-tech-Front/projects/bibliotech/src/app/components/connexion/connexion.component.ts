import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import axios from 'axios';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div class="container" style="margin-top: 30%; transform: translateY(-50%)">
      <h1>Connexion</h1>
      <label for="email">Email :</label>
      <input type="text" [(ngModel)]="email">
      <label for="password">Password :</label>
      <input type="password" [(ngModel)]="password">
      <input type="submit" (click)="submit()" style="width: calc(100% - 20px);
        padding: 10px;
        background-color: #5cb85c; /* Vert clair */
        border: none;
        border-radius: 4px;
        color: #fff;
        cursor: pointer;
        margin-bottom: 20px;">
      <div *ngIf="errorMessage" style="color: red;">{{ errorMessage }}</div>
    </div>
  `,
    styles: [`
    .container {
      max-width: 400px;
      margin: 0 auto;
      padding: 20px;
      background-color: #f9f9f9;
      border-radius: 8px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    }

    .container h1 {
      text-align: center;
      margin-bottom: 20px;
      color: #333;
    }

    label {
      display: block;
      margin-bottom: 8px;
      color: #555;
    }

    input[type="text"],
    input[type="password"] {
      width: calc(100% - 20px);
      padding: 10px;
      margin-bottom: 20px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      width: 100%;
      padding: 10px;
      background-color: #5cb85c; 
      border: none;
      border-radius: 4px;
      color: #fff;
      cursor: pointer;
    }

    button:hover {
      background-color: #0056b3;
    }

    .error-message {
      color: red;
      margin-top: 10px;
    }
  `]
})
export class ConnexionComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor() { }

  submit(): void {
    axios.post<any>('http://localhost:8000/login', { email: this.email, password: this.password })
      .then(response => {
        if (response.data && response.data.token) {
          localStorage.setItem('token', response.data.token);
          window.location.href = "http://localhost:4200/livres";
        } else {
          this.errorMessage = 'Email ou mot de passe incorrect.';
        }
      })
      .catch(error => {
        console.error('Erreur lors de la tentative de connexion : ', error);
        this.errorMessage = 'Une erreur s\'est produite lors de la tentative de connexion.';
      });
  }
}