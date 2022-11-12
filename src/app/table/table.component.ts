

import {AfterViewInit, Component, Input, OnInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../services/api.service';




export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
 @Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  displayedColumns: string[] = ["productName",
  "category", 
  "freshness",
  "price",
  "date", "action"];
  //dataSource: MatTableDataSource<UserData>;

  //@ViewChild(MatPaginator) paginator: MatPaginator;
  //@ViewChild(MatSort) sort: MatSort;
  @Input()dataSource1: any[];
  // dialog: any;



  constructor(private dialog: MatDialog, private api:ApiService) {}

   
  /*

  constructor() {
    // Create 100 users
    
  }


  */
 
   ngOnInit(): void {
     //throw new Error('Method not implemented.');
   }

   
   
   
   editProduct(row : any){


    this.dialog.open(DialogComponent,{
    width: '60%',
    data:row

    }).afterClosed().subscribe(value=>{
      if(value=='update')
      {
        
        this.api.getProduct()
      .subscribe({
        next:(res)=>{
          console.log(res);
          
          this.dataSource1 = res;
          //this.dataSource.paginator = this.paginator;
          //this.dataSource.sort = this.sort
          
        },
        error:(err)=>{
        alert("Erro while fetching the Records!!")
      }
      })


      }
    })

    
  }

   

   editProductHandler(cardData: any): void{
            
     


   }

   



   deleteProduct(id: number){
       
    this.api.deleteProduct(id)
    .subscribe({
      next:(res)=>{
        alert("Product Deleted Successfully");
      },
      error:()=>{
        alert("Error while deleting the record!!")
      }
    })

  }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
    //this.dataSource.sort = this.sort;
  }

  /*
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  */

}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 100).toString(),
    fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}

