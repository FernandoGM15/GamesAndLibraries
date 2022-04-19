import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Library } from 'src/app/interfaces/library.interface';
import { LibraryService } from 'src/app/services/library.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  formLibrary !: FormGroup;

  actionBtn:string = "Add";

  constructor(
    private formBuilder: FormBuilder,
    private libraryService: LibraryService,
    private dialogRef: MatDialogRef<CreateComponent>,
    @Inject(MAT_DIALOG_DATA) private library: Library
  ) { }

  ngOnInit(): void {
    this.formLibrary = this.formBuilder.group({
      name:["",Validators.required]
    })

    if (this.library) {
      this.formLibrary.controls["name"].setValue(this.library.name);
      this.actionBtn = 'Update';
    }
  }

  addLibrary():void{
    if(!this.library && this.formLibrary.valid){
      this.libraryService.postLibrary(this.formLibrary.value).subscribe({
        next:res=>{
          alert("Library registred successfully");
          this.formLibrary.reset();
          this.dialogRef.close(true);
        },
        error:err=>{
          alert(`Error while adding library ${err}`)
        }
      })
    }
    else{
      this.updateLibrary();
    }
  }

  updateLibrary():void{
    this.libraryService.putLibrary(this.formLibrary.value, this.library.id).subscribe({
      next:res=>{
        alert("Game updated successfully");
        this.formLibrary.reset();
        this.dialogRef.close(true);
      },
      error:err=>{
        alert(`Error while updating libary ${err}`)
      }
    })
  }
}
