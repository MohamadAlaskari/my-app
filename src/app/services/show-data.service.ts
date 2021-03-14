import { Injectable } from '@angular/core';
import { Show } from '../model/show';

@Injectable({
  providedIn: 'root'
})
export class ShowDataService {
  shows: Show[] = [];

  constructor() {
    this.shows.push(new Show(1, 'Paw Patrol'))
    this.shows.push(new Show(2, 'Breacking dawn'))
    this.shows.push(new Show(3, 'the dark night'));

  }
  saveShow(show: Show) {
    this.shows.push(show);
  }
  saveEditShow(show:Show){
    this.shows.filter;
  }
  deleteShow(show :Show){
    this.shows= this.shows.filter(s => s!== show);
  }
}
