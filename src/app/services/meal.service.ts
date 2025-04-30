import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { Observable } from 'rxjs';
import { Meal, MealResponse } from './mealTemplate';

@Injectable({
  providedIn: 'root'
})

export class MealService {
  
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast';

  constructor(private http: HttpClient) { }
  
  getMeals() : Observable<any> {
    return this.http.get<Meal[]>(this.apiUrl);
  }

  getMealById(id: string): Observable<MealResponse> {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    return this.http.get<MealResponse>(url);
  }

  
}
