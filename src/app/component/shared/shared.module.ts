import { ListOfAuthorsComponent } from './../list-of-authors/list-of-authors.component';
import { JoinNowComponent } from './../join-now/join-now.component';
import { ChooseCatagoryComponent } from './../choose-catagory/choose-catagory.component';
import { AllPostComponent } from './../all-post/all-post.component';
import { FooterComponent } from './../footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule } from '@angular/router';
import { CategoryButtonComponent } from '../category-button/category-button.component';
import { FeaturedComponent } from '../featured/featured.component';
import { ViewAllPostComponent } from '../view-all-post/view-all-post.component';



@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    AllPostComponent,
    ChooseCatagoryComponent,
    JoinNowComponent,
    ListOfAuthorsComponent,
    CategoryButtonComponent,
    FeaturedComponent,
    ViewAllPostComponent
  ],
  exports: [
    MenuComponent,
    FooterComponent,
    AllPostComponent,
    ChooseCatagoryComponent,
    JoinNowComponent,
    ListOfAuthorsComponent,
    CategoryButtonComponent,
    FeaturedComponent,
    ViewAllPostComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
