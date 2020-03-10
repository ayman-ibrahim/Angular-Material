import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle'

@NgModule({
    imports: [
        MatTableModule,
        MatButtonModule,
        MatButtonToggleModule
    ],
    exports : [
      MatTableModule,
      MatButtonModule,
      MatButtonToggleModule
    ] 
})
export class MaterialModule { }