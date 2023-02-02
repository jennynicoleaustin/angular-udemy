import { Component } from '@angular/core';
import {Ingredient} from "../shared/ingredients.model";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients: Ingredient[] = [
    new Ingredient('Limes', 6),
    new Ingredient('Tequila', 1)
  ];

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient)
  }
}