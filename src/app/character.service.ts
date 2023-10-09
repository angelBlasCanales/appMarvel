import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from './character';
import { Bitacora } from './bitacora';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private headers = new HttpHeaders({
    'Authorization':'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbmdlbC1ibGFzQG91dGxvb2suY29tIiwiZXhwIjoxNjk5Mzk2MDQ3LCJub21icmUiOiJKb3NlIEFuZ2VsIn0.5ssopowc7MiZEmQXweKbFAwFde-zn6Dqvbbv6tW0m9A'
  });
  

  //URL que obtiene todos los characters
  private baseURL = "http://localhost:8080/marvel/characters/";

  constructor(private httpClient : HttpClient) { }

  getAllCharacters(): Observable<Character[] | string> {
    return this.httpClient.get<Character[]>(`${this.baseURL}`,{headers:this.headers}).pipe(
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
    return this.httpClient.get<Character>(`${this.baseURL}${id}`,{headers:this.headers}).pipe(
      catchError((error: any) => {
        if (error.status !== 200) {
          return 'Ocurrió un error en la solicitud.';
        }
        throw error;
      })
    );
  }

  getBitacoraList():Observable<Bitacora[]>{
    return this.httpClient.get<Bitacora[]>(`${this.baseURL}bitacora/`,{headers:this.headers});
  }

}
