import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { ArtistaComponent } from './components/artista/artista.component';

export const APP_ROUTING: Routes = [
    {path: '', component: HomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'artista/:id', component: ArtistaComponent}
];