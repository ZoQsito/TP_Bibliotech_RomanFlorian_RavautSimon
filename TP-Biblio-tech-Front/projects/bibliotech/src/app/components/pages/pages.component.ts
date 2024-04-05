import { Component,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [CommonModule],
  template: `
    <a
  href="http://localhost:4200/livres"
        role="button"
        style="height: 65px; position: fixed; top: 30px; left: 30px;"
        >retour</a
      >
  <div class="container" style="margin-top: 30px;">
    <div *ngFor="let livre of livreList" style="display: flex; justify-content: space-around;">
      <img src="{{ livre.image }}" alt="img" style="height: 390px">
      <div style="text-wrap: wrap; max-width: 50%;">
        <div style="display: flex; align-items: center;">
          <h1 style="margin-bottom: 0;">{{ livre.title }}</h1>
          <div>
            <span class="categorie" *ngFor="let categorie of categories">{{ categorie }}</span>
          </div>
        </div>
        {{ livre.author }}
        <br><br>
        Date de création: {{ livre.createdAt | date:'dd/MM/yyyy' }}
        <br>
        Last update: {{ livre.updatedAt | date:'dd/MM/yyyy' }}
        <br><br>
        <div style="max-height: 200px; overflow-y: auto;">
          Resume:<br>
          <span style="font-size: small;">{{ livre.resume }}</span>
        </div>
      </div>
      
    </div>
    <div style="display: flex; align-items: center;" >
      <a
        role="button"
        (click)="pagePrecedente()"
        style="height: 65px"
        ><</a
      >
      <div style="background-color: aliceblue;  width: 75%; height: 600px; margin: 20px auto; margin-top: 30px; margin-bottom: 30px; padding: 30px; position: relative;"*ngFor="let contenue of PageList">
        <p style="text-align: center; color: black; font-weight: bold">{{contenue.title}}</p>
        <p style="text-align: center; color: black;">{{contenue.contenu}}</p>
      </div>
      <a
        role="button"
        style="height: 65px"
        (click)="pageSuivante()"
        >></a
      >
    </div>
  </div>
  `,
  styles: [
    `
    .categorie {
      font-size: small;
      padding: 5px;
      border: 1px solid white;
      border-radius: 10px;
      margin-left: 10px;
      margin-bottom: 15px;
    }

    .categorie:hover {
      background-color: white;
      color:  black;
    }
    `
  ]
})

export class PagesComponent implements OnInit {
  livreList: any[] = [];
  PageList: any[] = [];
  page_number: number = 0;
  categories :  string []= [];
  currentPage: number = 0;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    axios.get<any>('http://localhost:8000/api/livres/' + idParam)
    .then(response => {
      const livreData = response.data;
      this.livreList.push({
        id: livreData.id,
        title: livreData.title,
        author: livreData.author,
        image: livreData.image,
        categories: livreData.categories,
        resume : livreData.resume,
        createdAt : livreData.createdAt,
        updatedAt : livreData.updatedAt,
      });
      console.log(livreData.categories);
      const categoriesString = livreData.categories;
      this.categories = categoriesString.split('|');

      axios.get<any>('http://localhost:8000/api/pages/' + idParam)
      .then(response => {
        const pageData = response.data;
        console.log(pageData);
        this.page_number = pageData.length;
      
        if (Array.isArray(pageData)) {
          this.PageList = pageData.map((item: any) => {
            return {
              id: item.id,
              title: item.title,
              contenu: item.content,
            };
            
          });

        } else {
          this.PageList = [{
            id: pageData.id,
            title: pageData.title,
            contenu: pageData.content,
          }];
          
        }
      })
      .catch(error => {
        console.error('Une erreur est survenue lors de la récupération des données : ', error);
      });
    })
    .catch(error => {
      console.error('Une erreur est survenue lors de la récupération des données : ', error);
    });
    console.log(this.PageList);
  }


  goBack(): void {
    window.history.back();
  }

  pagePrecedente(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    }
  }

  pageSuivante(): void {
    if (this.currentPage < this.PageList.length - 1) {
      this.currentPage++;
    }
  }
}
