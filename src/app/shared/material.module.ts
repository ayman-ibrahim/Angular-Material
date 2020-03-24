import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';

@NgModule({
    imports: [
        MatTableModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatSidenavModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatTabsModule,
        MatCardModule
    ],
    exports : [
      MatTableModule,
      MatButtonModule,
      MatButtonToggleModule,
      MatSidenavModule,
      MatIconModule,
      MatMenuModule,
      MatToolbarModule,
      MatTabsModule,
      MatCardModule
    ] 
})
export class MaterialModule { }