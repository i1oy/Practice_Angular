import { NgModule } from '@angular/core';

import {
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatCardModule,
  MatIconModule
} from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule
  ],
  declarations: []
})
export class MaterialModule { }
