import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-soso',
  templateUrl: './soso.component.html',
  styleUrls: ['./soso.component.scss']
})
export class SosoComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
}
