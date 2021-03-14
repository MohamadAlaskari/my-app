import { Component, OnInit } from '@angular/core';
import { Show } from '../../model/show';
import { ShowDataService } from '../../services/show-data.service';

@Component({
  selector: 'app-show-list',
  templateUrl: './show-list.component.html',
  styleUrls: ['./show-list.component.css'],
})
export class ShowListComponent implements OnInit {
  disable = 0;
  editClicked = false;
  saveClicked = true;

  editShow: Show;
  constructor(private showDataService: ShowDataService) {}
  get shows(): Show[] {
    return this.showDataService.shows;
  }

  edit(show: Show) {
    this.editShow = show;
  }

  toEdit(show: Show): boolean {
    if (!this.editShow) {
      return false;
    } else if (this.editShow !== show) {
      return false;
    } else {
      return true;
    }
  }

  editm() {
    this.disable = 1;
    this.editClicked = true;
    this.saveClicked = false;
  }
  savem() {
    this.disable = 0;
    this.saveClicked = true;
    this.editClicked = false;
  }
  deletem() {
    this.disable = 0;
  }
  ngOnInit(): void {}
}
