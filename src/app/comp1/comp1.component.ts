import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  likesCounter;
  placeholder;
  @Input() chani;
name :"apple";
  constructor() {
    this.likesCounter = 0;
    this.placeholder = 'chani';
   }

  ngOnInit() {
  }

like(name:string) {
  this.likesCounter++;
  this.chani = name;
}
}
