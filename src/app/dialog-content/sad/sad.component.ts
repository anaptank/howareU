import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sad',
  templateUrl: './sad.component.html',
  styleUrls: ['./sad.component.scss']
})
export class SadComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
