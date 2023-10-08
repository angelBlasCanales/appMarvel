import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './character';
import { Bitacora } from './bitacora';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  //URL que obtiene todos los characters
  private baseURL = "http://localhost:8080/public/marvel/characters/";

  constructor(private httpClient : HttpClient) { }

  getAllCharacters(): Observable<Character[] | string> {
    return this.httpClient.get<Character[]>(`${this.baseURL}`).pipe(
      map((response: Character[]) => {
        return response;
      }),
      catchError((error: any) => {
        if (error.status !== 200) {
          return 'Ocurrió un error en la solicitud.'
        }
        throw error;
      })
    );
  }

  getCharacterById(id: number): Observable<Character | string> {
    return this.httpClient.get<Character>(`${this.baseURL}${id}`).pipe(
      catchError((error: any) => {
        if (error.status !== 200) {
          return 'Ocurrió un error en la solicitud.';
        }
        throw error;
      })
    );
  }

  getBitacoraList():Observable<Bitacora[]>{
    return this.httpClient.get<Bitacora[]>(`${this.baseURL}bitacora/`);
  }

}
