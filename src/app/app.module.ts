import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SliderComponent } from './slider/slider.component';
import { SliderDatasService } from './services/slider-datas.service';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SliderDatasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
