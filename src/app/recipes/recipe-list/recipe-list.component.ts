import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('test recipe','this is a test recipe','https://www.archanaskitchen.com/images/archanaskitchen/Indian_Vegetables_Dry/Quick_Cauliflower_Sabzi_Recipe-1.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
