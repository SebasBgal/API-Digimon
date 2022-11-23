import { Component, OnInit } from '@angular/core';
import { DigimonService } from '../../services/digimon.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-digi-detail',
  templateUrl: './digi-detail.component.html',
  styleUrls: ['./digi-detail.component.css']
})
export class DigiDetailComponent implements OnInit {
   
  Digimon:any = "";
  DigiLevel:any = "";
  DigiImg = "";
  namee= "";

  constructor(
    private DigimonService: DigimonService,
    private activatedRoute : ActivatedRoute
  ) { 
   this.activatedRoute.params.subscribe(
    params =>{
      this.getDigimon(params["name"])
    }
   );
  }

  ngOnInit(): void {

  }

  getDigimon(name){
    console.log(name)
       for (let i = 0 ; i<=209;i++){
        this.DigimonService.getDigimons(name).subscribe(
          res => {
            this.namee = res[i].name;
            if(name==this.namee){
              this.Digimon = res[i];
              this.DigiImg = res[i].img;
              this.DigiLevel = res[i].level;
            }
        
          },
          err => {
            console.log(err);
          }
    
        ); 
  }
}

}
