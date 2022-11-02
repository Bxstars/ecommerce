import { SobreComponent } from './sobre/sobre.component';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './navegacao/home/home.component';
import { Routes } from "@angular/router";

export const rootRouterConfig: Routes = [
  {
     path: '',
     redirectTo: '/home',
     pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contato',
    component: ContatoComponent
  },
  {
    path: 'sobre',
    component: SobreComponent
  },
];
