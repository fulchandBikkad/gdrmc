import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BusinessHeaderComponent } from './header/business-header/business-header.component';
import { BusinessFooterComponent } from './footer/business-footer/business-footer.component';
import { BusinessContactComponent } from './contactUs/business-contact/business-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    BusinessHeaderComponent,
    BusinessFooterComponent,
    BusinessContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
