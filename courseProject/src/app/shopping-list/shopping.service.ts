import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from "../shared/ingredients.model";

@Injectable({providedIn: 'root'})
export class ShoppingService {
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Limes', 6),
    new Ingredient('Tequila', 1)
  ];

  getIngredients() {
    return this.ingredients.slice()
  }

  addIngredient(ingredient:Ingredient) {
    this.ingredients.push(ingredient)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }
  constructor() {
  }
  addIngredients(ingredients:Ingredient[]) {
    this.ingredients.push(...ingredients)
    this.ingredientsChanged.emit(this.ingredients.slice())
  }

} // class ShoppingService
