import { Injectable } from '@angular/core';
import { GamesLibraries } from '../interfaces/games-libraries.interface';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesLibrariesService {

  private readonly URI = "http://localhost:3000/api/games-libraries";
  constructor(private http: HttpClient) { }

  getGamesLibraries(): Observable<GamesLibraries[]>{
    return this.http.get<GamesLibraries[]>(this.URI)
  }

  postGamesLibrary(library:GamesLibraries){
    return this.http.post<GamesLibraries>(this.URI, library)
  }

  putGamesLibraries(library:GamesLibraries, id:number){
    return this.http.put<GamesLibraries>(`${this.URI}/${id}`, library);
  }

  deleteGamesLibraries(id:number){
    return this.http.delete<GamesLibraries>(`${this.URI}/${id}`);
  }
}
