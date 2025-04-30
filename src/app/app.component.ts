import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { MealService } from './services/meal.service';
import { Meal } from './services/mealTemplate';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HttpClientModule, RouterOutlet, NavbarComponent, HomeComponent, RecipeListComponent, RecipeDetailComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
goToMealDetail(arg0: string) {
throw new Error('Method not implemented.');
}
  title = 'recette';
  meals : Meal[] = [];

  constructor(private mealServices: MealService) {} 
  
  ngOnInit() {
    this.mealServices.getMeals().subscribe((data: any) => {
      this.meals = data.meals;
      console.log(this.meals);
    }, (error: any) => {
      console.error('Error fetching meals:', error);
    });
  }
}


@NgModule({
  imports: [HttpClientModule],
  providers: [MealService],
})
export class AppModule { }

