import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DigimonService {
  
  baseUrl= environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  getDigimons(){
    return this.http.get<any>("https://digimon-api.vercel.app/api/digimon")
  }
}
