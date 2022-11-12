import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Inject } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import {MatDialogRef , MAT_DIALOG_DATA} from '@angular/material/dialog'
import { ɵInjectableAnimationEngine } from '@angular/platform-browser/animations';
import { DialogComponent } from '../dialog/dialog.component';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  
  @Input() product: any


  ngOnInit(): void {
    //throw new Error('Method not implemented.');
    


  }



  cnt = 0


  increment(){

    if(this.cnt<this.product.quant)
    this.cnt+=1;

  }

  decrement()
  {
    if(this.cnt>0)
    this.cnt-=1;
  }


  


  addCart()
  {

      alert(this.cnt);
      
      




  }



  
      

  


  }



