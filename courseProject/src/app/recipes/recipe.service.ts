import {EventEmitter, Injectable} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredients.model";
import {ShoppingService} from "../shopping-list/shopping.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe("Margarita", "Hannah's favorite", "https://images.pexels.com/photos/2480828/pexels-photo-2480828.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", [
      new Ingredient('tequila', 1),
      new Ingredient('triple sec', 1),
      new Ingredient('limes', 3)

    ])
  ];

  getRecipes() {
    // slice returns a new array with a copy of the original array in the service (preventing elements outside the service from accessing the original array)
    return this.recipes.slice();
  }

  constructor(private shoppingService: ShoppingService) {
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients)
  }
} // class RecipeService
