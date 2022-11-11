import { Component, OnInit } from '@angular/core';

import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {



  ngOnInit(): void {
  }

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogComponent, {
       width: "60%"
    });
  }

}
