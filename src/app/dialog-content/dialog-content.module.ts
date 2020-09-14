import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HappyComponent } from './happy/happy.component';
import { SosoComponent } from './soso/soso.component';
import { SadComponent } from './sad/sad.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    HappyComponent,
    SosoComponent,
    SadComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class DialogContentModule { }
