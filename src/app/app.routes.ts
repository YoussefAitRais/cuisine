import { Routes } from '@angular/router';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';

export const routes: Routes = [
    { path: '', component: RecipeListComponent },
    { path: 'meal/:id', component: RecipeDetailComponent }
  ];
  
