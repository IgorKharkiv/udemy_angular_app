import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { COMPONENTS } from './components/';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe/recipe-list/recipe-item/recipe-detail/recipe-detail.component';

@NgModule({
  declarations: [
    ...COMPONENTS,
    HeaderComponent,
    AppComponent,
    RecipeComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    RecipeListComponent,
    RecipeDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
