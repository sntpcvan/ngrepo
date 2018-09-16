import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SrtianComponent } from './srtian/srtian.component';
import { HttpClientModule } from '@angular/common/http';
import { ArrServiceService } from './arr-service.service';

@NgModule({
  declarations: [
    AppComponent,
    SrtianComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ArrServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
