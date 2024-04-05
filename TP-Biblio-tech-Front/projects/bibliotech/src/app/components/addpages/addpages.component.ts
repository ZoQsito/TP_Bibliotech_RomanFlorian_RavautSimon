import { Component } from '@angular/core';

@Component({
  selector: 'app-addlivre',
  standalone: true,
  imports: [],
  template: `
  <a
  href="http://localhost:4200/livres"
        role="button"
        style="height: 65px; position: fixed; top: 30px; left: 30px;"
        >retour</a
      >
  <div class="container" style="margin-top: 30px; text-align: center">
    <h1>1ere Page</h1>
    <span>ceci est la premiere page, vous pourrez en ajouter dans votre livre en allant dedans</span>
    <input type="text" placeholder="Titre">
    <br>
    content
    <textarea style="height: 500px"></textarea>
  </div>
  `,
  styles: `
  
  `
})

export class AddpagesComponent {

}
