import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesRoutingModule } from './games-routing.module';
import { GamesComponent } from './games.component';
import { MaterialModule } from 'src/app/material.module';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LibrariesDialogComponent } from './libraries-dialog/libraries-dialog.component';




@NgModule({
  declarations: [
    GamesComponent,
    CreateComponent,
    LibrariesDialogComponent
  ],
  imports: [
    CommonModule,
    GamesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class GamesModule { }
