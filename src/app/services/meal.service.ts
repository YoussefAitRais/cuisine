import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';  

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private apiUrl = 'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast';

  constructor(private http: HttpClient) { }
  getMeals()  {
    return this.http.get(this.apiUrl);
  }
}
