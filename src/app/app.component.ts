import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HomeComponent } from "./home/home.component";
import { RecipeListComponent } from "./recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipe-detail/recipe-detail.component";
import { HttpClientModule } from '@angular/common/http';

import { MealService } from './services/meal.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, RecipeListComponent, RecipeDetailComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recette';
  meals : any[] = [];

  constructor(private mealServices: MealService) {}  ngOnInit() {
    this.mealServices.getMeals().subscribe((data: any) => {
      this.meals = data.meals;
    });
  }
}


@NgModule({
  imports: [HttpClientModule],
  providers: [MealService],
})
export class AppModule { }

