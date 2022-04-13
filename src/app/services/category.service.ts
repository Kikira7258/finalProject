import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor() { }

  category$ = new Subject<string>();

  setCategory(category: string) {
    this.category$.next(category);
  }
}
