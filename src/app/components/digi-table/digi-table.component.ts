import { Component, OnInit} from '@angular/core';

import { DigimonService } from '../../services/digimon.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-digi-table',
  templateUrl: './digi-table.component.html',
  styleUrls: ['./digi-table.component.css']
})
export class DigiTableComponent implements OnInit {

 searchtext:any;
  data:any[] = [];
  page = 1;
  totalDigimon:number;

  constructor(
    private digiservice: DigimonService,
    private router:Router
  ) {
   
   }

  ngOnInit(): void {
    this.getDigimons();
  }
  getDigimons(){ 
      let  DigimonData;
      for(let i = 0; i<=209; i++){
        this.digiservice.getDigimons(name).subscribe(
          res=>{
              DigimonData = {
              level: res[i].level,
              image: res[i].img,
              name:  res[i].name,
            
            };
            this.data.push(DigimonData);
            this.totalDigimon = this.data.length;
          
          },
          err=>{
            console.log(err);
          }
        );
      }
     
  }

  

  getdigimondetail(digimon){
   this.router.navigateByUrl(`DigiDetail/${digimon.name}`);
   console.log(digimon)
    
  }




}
