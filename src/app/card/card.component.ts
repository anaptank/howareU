import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HappyComponent } from '../dialog-content/happy/happy.component';
import { SosoComponent } from '../dialog-content/soso/soso.component';
import { SadComponent } from '../dialog-content/sad/sad.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {
  public happyComponent: HappyComponent;
  public sosoComponent: SosoComponent;
  public sadComponent: SadComponent;

  constructor(
    public dialog: MatDialog,
  ) {}

  openDialog(component) {
    switch (component) {
      case 'happyComponent':
        this.dialog.open(HappyComponent);
        break;
      case 'sosoComponent':
        this.dialog.open(SosoComponent);
        break;
      case 'sadComponent':
        this.dialog.open(SadComponent);
    }
  }
}
