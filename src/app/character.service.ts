import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './character';
import { Bitacora } from './bitacora';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  //URL que obtiene todos los characters
  private baseURL = "http://localhost:8080/marvel/characters/";

  constructor(private httpClient : HttpClient) { }

  getCharacterList():Observable<Character[]>{
    return this.httpClient.get<Character[]>(`${this.baseURL}`);
  }

  getCharacterById(id:number):Observable<Character>{
    return this.httpClient.get<Character>(`${this.baseURL}${id}`);
  }

  getBitacoraList():Observable<Bitacora[]>{
    return this.httpClient.get<Bitacora[]>(`${this.baseURL}bitacora/`);
  }

}
