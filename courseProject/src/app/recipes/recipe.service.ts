import {Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe("Margarita", "Hannah's favorite", "https://images.pexels.com/photos/2480828/pexels-photo-2480828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
  ];

  getRecipes() {
    // slice returns a new array with a copy of the original array in the service (preventing elements outside the service from accessing the original array)
    return this.recipes.slice();
  }
  constructor() {
  }
} // class RecipeService
