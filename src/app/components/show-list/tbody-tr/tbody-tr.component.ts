import { Component, OnInit, Input } from '@angular/core';
import { Show } from '../../../model/show';

@Component({
  selector: 'app-tbody-tr',
  templateUrl: './tbody-tr.component.html',
  styleUrls: ['./tbody-tr.component.css']
})
export class TbodyTrComponent implements OnInit {
@Input() s:Show;
editShow : Show;
disable=0;
editClicked=false;
saveClicked=true;
constructor() { }
ngOnInit(): void {
}
  edit(s :Show){
    this.editShow = s;
  }

  toEdit(s :Show) : boolean {
    if (! this.editShow) {
      return false;
    }else if (this.editShow !== s){
      return false;
    }else{
      return true;
    }
  }
  
  
editm(){
  this.disable = 1;
  this.editClicked=true;
  this.saveClicked=false;

}
savem(){
 this.disable=0;
  this.saveClicked=true;
  this.editClicked=false;
  
}
deletem(){
  this.disable = 0;

}
  





  

}
