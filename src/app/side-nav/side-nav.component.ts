import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
  }

  selectCategory(category: string) {
    this.categoryService.setCategory(category)
  }

}