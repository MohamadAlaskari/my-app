import { Component, OnInit } from '@angular/core';
import { Show } from '../../model/show';
import { ShowDataService } from '../../services/show-data.service';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrls: ['./show-form.component.css'],
})
export class ShowFormComponent implements OnInit {
  show: Show;
  shows_length: number;
  constructor(private showDataService: ShowDataService) {
    this.show = new Show(null, null);
    this.shows_length = showDataService.shows.length;
    console.log('length: ', this.shows_length);
  }

  save() {
    if (this.show.id !== null && this.show.title !== null) {
      this.showDataService.saveShow(this.show);
      this.show = new Show(null, null);
    } else if (this.show.id == null && this.show.title == null) {
      alert('Bitte geben sie ein wert!!');
    } else if (this.show.id == null) {
      alert('ID : darf nicht leer sein!!');
    } else if (this.show.title == null) {
      alert('Title : darf nicht leer sein!!');
    }
  }
  ngOnInit(): void {}
}
