import { Component, OnInit } from '@angular/core';
import { Library } from 'src/app/interfaces/library.interface';
import { LibraryService } from 'src/app/services/library.service';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from './create/create.component';


@Component({
  selector: 'app-libraries',
  templateUrl: './libraries.component.html',
  styleUrls: ['./libraries.component.css']
})
export class LibrariesComponent implements OnInit {

  libraries!: MatTableDataSource<Library>;

  displayedColumns: string[] = ['id', 'name', 'createdAt', "actions"];

  constructor(
    private libraryService: LibraryService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getLibraries();
  }

  getLibraries():void{
    this.libraryService.getLibraries().subscribe((libraries:Library[]) => {
      this.libraries = new MatTableDataSource(libraries);
    });
  }

  applyFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.libraries.filter = filterValue.trim().toLowerCase();
  }

  openCreateComponent():void{
    this.dialog.open(CreateComponent,{
      width:"60%"
    }).afterClosed().subscribe(res=>{
      if(res){
        this.getLibraries();
      }
    })
  }

  editLibrary(library:Library):void{
    this.dialog.open(CreateComponent,{
      width:"60%",
      data:library
    }).afterClosed().subscribe(res=>{
      if(res){
        this.getLibraries();
      }
    })
  }

  deleteLibrary(library:Library):void{
    this.libraryService.deleteLibrary(library.id).subscribe({
      next:res=>{
        this.getLibraries();
      },
      error:err=>{
        alert(`Error while deleting library ${err}`);
      }
    })
  }
}
