import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
    imports: [
        MatTableModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatSidenavModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule
    ],
    exports : [
      MatTableModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatSidenavModule,
      MatIconModule,
      MatMenuModule,
      MatToolbarModule
    ] 
})
export class MaterialModule { }