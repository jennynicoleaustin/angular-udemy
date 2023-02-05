import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredients.model";
import {ShoppingService} from "../shopping.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInput: ElementRef;

  constructor(private shoppingService: ShoppingService) {

  }

  ngOnInit() {
  }

  onAddItem() {
    const newIngredient = new Ingredient(
      this.nameInputRef.nativeElement.value,
      this.amountInput.nativeElement.value);
    this.shoppingService.addIngredient(newIngredient);
  }
} // class ShoppingEditComponent
