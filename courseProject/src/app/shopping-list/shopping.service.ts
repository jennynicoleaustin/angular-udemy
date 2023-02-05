import {Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredients.model";

@Injectable({providedIn: 'root'})
export class ShoppingService {
  private ingredients: Ingredient[] = [
    new Ingredient('Limes', 6),
    new Ingredient('Tequila', 1)
  ];

  getIngredients() {
    return this.ingredients.slice()
  }

  addIngredient(ingredient:Ingredient) {
    this.ingredients.push(ingredient)
  }
  constructor() {
  }

} // class ShoppingService
