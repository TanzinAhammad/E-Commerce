import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  cnt = 0

  

  @Input() product: any

  ngOnInit(): void {
  }


  increment(){
    console.log("Hello");
    this.cnt+=1;
  }

  decrement()
  {
    this.cnt-=1;
  }

  

}
