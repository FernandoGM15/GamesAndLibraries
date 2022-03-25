import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Game } from "src/app/interfaces/game.interface";

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private readonly URI = "http://localhost:3000/api/games";
  constructor(private http: HttpClient) { }

  getGames(): Observable<Game[]>{
    return this.http.get<Game[]>(this.URI)
  }

  postGame(game:Game){
    return this.http.post<Game>(this.URI, game)
  }

  putGame(game:Game, id:number){
    return this.http.put<Game>(`${this.URI}/${id}`, game);
  }

  deleteGame(id:number){
    return this.http.delete<Game>(`${this.URI}/${id}`);
  }
}
