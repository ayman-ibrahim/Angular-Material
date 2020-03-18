import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material.module';
import { AppRoutingModule } from './app-routing.module';


// let routes: Routes = [
//   { path: 'contactmanager', loadChildren: './contactmanager/contactmanager.module#ContactmanagerModule' },
//   { path: 'demo', loadChildren: './demo/demo.module#DemoModule' },  
//   { path: '**', redirectTo: 'demo' }
// ];

@NgModule({
  declarations: [
    AppComponent  
  ],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    // ContactmanagerModule
    //RouterModule.forRoot(routes),
   // DemoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
