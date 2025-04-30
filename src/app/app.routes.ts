import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'home', 
    component: HomeComponent },
  { path: 'recipes', 
    component: RecipeListComponent },
  { path: 'meal/:id',
     component: RecipeDetailComponent }
     
];
