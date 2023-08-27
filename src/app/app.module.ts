import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SocialPComponent } from './components/social-p/social-p.component';
import { SinglePComponent } from './components/single-p/single-p.component';
import { FormPComponent } from './components/form-p/form-p.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SocialPComponent,
    SinglePComponent,
    FormPComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
