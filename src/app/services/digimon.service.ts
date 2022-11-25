import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {
  

  constructor(
    private http: HttpClient
  ) { }

  getDigimons(name){
    return this.http.get<any>("https://digimon-api.vercel.app/api/digimon")
  }
}
