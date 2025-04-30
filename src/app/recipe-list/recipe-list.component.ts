import { Component, OnInit } from '@angular/core';
import { MealService } from '../services/meal.service';
import { Meal } from '../services/mealTemplate';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  meals: Meal[] = [];

  constructor(private mealService: MealService, private router: Router) {}

  ngOnInit(): void {
    this.mealService.getMeals().subscribe({
      next: res => this.meals = res.meals,
      error: err => console.error('Error loading meals', err)
    });
  }

  goToMealDetail(id: string): void {
    this.router.navigate(['/meal', id]);
  }

  
}
