import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MealService } from '../services/meal.service';
import { Meal } from '../services/mealTemplate';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
// Removed duplicate implementation of getMealProperty
  meal: Meal | null = null;
i: any;

  constructor(private route: ActivatedRoute, private mealService: MealService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.mealService.getMealById(id).subscribe({
        next: res => {
          this.meal = res.meals[0];
          console.log('Loaded meal:', this.meal);
        },
        error: err => console.error('Error fetching meal', err)
      });
    }
  }

  getMealProperty(meal: any, key: string): string {
    return meal[key] || '';
  }
  
  
}
