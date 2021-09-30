import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {StoreModule} from '@ngrx/store';
import { AppComponent } from './app.component';
import { counterReducer } from './store/counter.reducer';
import { NumberComponent } from './number/number.component';

@NgModule({
  declarations: [
    AppComponent,
    NumberComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({counter: counterReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
