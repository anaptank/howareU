import { MatCardModule } from '@angular/material/card';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { FlexLayoutModule } from '@angular/flex-layout';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HappyComponent } from './dialog-content/happy/happy.component';
import { SosoComponent } from './dialog-content/soso/soso.component';
import { SadComponent } from './dialog-content/sad/sad.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HappyComponent,
    SosoComponent,
    SadComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    FlexLayoutModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    HappyComponent,
    SosoComponent,
    SadComponent
  ]
})
export class AppModule { }
