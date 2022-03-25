import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GameService } from 'src/app/services/game.service';
import { CreateComponent } from './create/create.component';
import { Game } from 'src/app/interfaces/game.interface';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  // INICIALIZADOR DE LA VARIABLE GAMES EL CUAL ES UN ARREGLO DE LA INTERFACE GAME
  games!: Game[];

  //CONSTRUCTOR QUE INICIALIZA LA INSTANCIA DE GameService
  constructor(public dialog:MatDialog, private gameService: GameService) { }

  //INICIALIZA LA FUNCION GET GAMES
  ngOnInit(): void {
    this.getGames();
  }

  //ABRE LA INSTANCIA DEL COMPONENTE CREATE
  openCreateComponent():void{
    this.dialog.open(CreateComponent,{
      width: '60%'
    }).afterClosed().subscribe(res=>{
      if(res){
        this.getGames();
      }
    })
  }

  editGame(game:Game):void{
    this.dialog.open(CreateComponent,{
      width: '60%',
      data: game
    }).afterClosed().subscribe(res=>{
      if(res){
        this.getGames();
      }
    })
  }
  //OBTIENE LOS REGiSTROS DE GameService y los almacena en variable games
  getGames(): void {
    this.gameService.getGames().subscribe((games:Game[]) => {
      this.games = games;
    });
  }
}
