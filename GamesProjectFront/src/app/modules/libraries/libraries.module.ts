import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrariesRoutingModule } from './libraries-routing.module';
import { LibrariesComponent } from './libraries.component';
import { MaterialModule } from 'src/app/material.module';
import { CreateComponent } from './create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LibrariesComponent,
    CreateComponent
  ],
  imports: [
    CommonModule,
    LibrariesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LibrariesModule { }
