import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DigimonService } from '../../services/digimon.service';


@Component({
  selector: 'app-digi-table',
  templateUrl: './digi-table.component.html',
  styleUrls: ['./digi-table.component.css']
})
export class DigiTableComponent implements OnInit {

  displayedColumns: string[] = ["level","image","name"];
  data:any[] = [];
  datasource = new MatTableDataSource<any>(this.data);
  Digimons = [];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
 


  constructor(
    private digiservice: DigimonService
  ) { }

  ngOnInit(): void {
    this.getDigimons();
  }
  getDigimons(){ 
      let  DigimonData;
      for(let i = 0; i<=209; i++){
        this.digiservice.getDigimons().subscribe(
          res=>{
            DigimonData = {
              level: res[i].level,
              image: res[i].img,
              name:  res[i].name
            };
            this.data.push(DigimonData);
            this.datasource  = new MatTableDataSource<any>(this.data);
            this.datasource.paginator = this.paginator;
          },
          err=>{
            console.log(err);
          }
        );
      }
     
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.datasource.filter = filterValue.trim().toLowerCase();

    if (this.datasource.paginator) {
      this.datasource.paginator.firstPage();
    }
  }

}
