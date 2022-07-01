import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game } from 'src/app/interfaces/game.interface';
import { Library } from 'src/app/interfaces/library.interface';
import { GamesLibrariesService } from 'src/app/services/games-libraries.service';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-libraries-dialog',
  templateUrl: './libraries-dialog.component.html',
  styleUrls: ['./libraries-dialog.component.css']
})
export class LibrariesDialogComponent implements OnInit {

  libraries !: Library[];

  formGameLibrary !: FormGroup;


  constructor(
    private formBuilder : FormBuilder,
    private libraryService: LibraryService,
    private dialogRef: MatDialogRef<LibrariesDialogComponent>,
    private gamesLibraryService: GamesLibrariesService,
    @Inject(MAT_DIALOG_DATA) private game : Game
    ) { }

  ngOnInit(): void {
    this.getLibraries();

    this.formGameLibrary = this.formBuilder.group({
      libraries:["",Validators.required],
      gameId:this.game.id
    })
  }

  getLibraries():void{
    this.libraryService.getLibraries().subscribe({
      next:res=>{
        this.libraries = res;
      },
      error:error=>{
        alert(`Error to get libraries resgistries ${error}`);
      }
    })
  }

  addGameToLibrary():void{
      this.gamesLibraryService.postGamesLibrary(this.formGameLibrary.value).subscribe({
        next: (res) => {
          alert('Game added succesfully');
          this.formGameLibrary.reset();
          this.dialogRef.close(true);
        },
        error:error=>{
          alert(`There was an error on register the game`);
          return;
        }
      });
  }
}
