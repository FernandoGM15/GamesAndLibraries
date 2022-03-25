import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameService } from 'src/app/services/game.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Game } from 'src/app/interfaces/game.interface';
// import { IndexComponent } from '../index/index.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
})
export class CreateComponent implements OnInit {
  formGame!: FormGroup;

  actionBtn: string = 'Add';

  constructor(
    private formBuilder: FormBuilder,
    private gameService: GameService,
    private dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) private game: Game
  ) {}

  ngOnInit(): void {
    this.formGame = this.formBuilder.group({
      name: ['', Validators.required],
      genre: ['', Validators.required],
      developer: ['', Validators.required],
      releaseYear: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required],
    });

    if (this.game) {
      this.formGame.controls['name'].setValue(this.game.name);
      this.formGame.controls['genre'].setValue(this.game.genre);
      this.formGame.controls['developer'].setValue(this.game.developer);
      this.formGame.controls['releaseYear'].setValue(this.game.releaseYear);
      this.formGame.controls['image'].setValue(this.game.image);
      this.formGame.controls['description'].setValue(this.game.description);
      this.actionBtn = 'Update';
    }
  }

  addGame(): void {
    if (!this.game) {
      if (this.formGame.valid) {
        this.gameService.postGame(this.formGame.value).subscribe({
          next: (res) => {
            alert('Game added succesfully');
            this.formGame.reset();
            this.dialogRef.close(true);
          },
          error: (error) => {
            alert(`Error while adding game ${error}`);
          },
        });
      }
    }
    else{
      this.updateGame();
    }
  }

  updateGame(): void {
    this.gameService.putGame(this.formGame.value, this.game.id).subscribe({
      next: (res) => {
        alert('Game updated succesfully');
        this.formGame.reset();
        this.dialogRef.close(true);
      },
      error: (error) => {
        alert(`Error while adding game ${error}`);
      },
    });
  }
}
