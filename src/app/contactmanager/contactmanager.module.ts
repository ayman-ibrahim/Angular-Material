import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactmanagerComponent } from './contactmanager.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  { path: '', component: ContactmanagerComponent, 
      children: [
        { path: '', component: MainContentComponent }
      ]
  },
  { path: '**', redirectTo: 'buttons' }
];

@NgModule({
  declarations: [ContactmanagerComponent, ToolbarComponent, MainContentComponent, SideNavComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class ContactmanagerModule { 
  constructor() {
    console.log("ContactmanagerModule");
  }
}
