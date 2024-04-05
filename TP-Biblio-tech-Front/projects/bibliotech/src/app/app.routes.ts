import { Routes } from '@angular/router';
import { LivresComponent } from './components/livres/livres.component';
import { PagesComponent } from './components/pages/pages.component';
import { ConnexionComponent } from './components/connexion/connexion.component';
import { AddlivreComponent } from './components/addlivre/addlivre.component';
import { AddpagesComponent } from './components/addpages/addpages.component';

export const routes: Routes = [
  { path: '', component: ConnexionComponent },
  { path: 'livres', component: LivresComponent },
  { path: 'livre/:id', component: PagesComponent },
  { path: 'addlivre', component: AddlivreComponent },
  { path: 'addpage', component: AddpagesComponent },
];