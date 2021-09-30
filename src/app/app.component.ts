import { Component, OnInit, Type } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from './store/counter.actions';
import {interval} from 'rxjs';
import { iState } from './store/counter.reducer';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  countDown;
  isActive:boolean = false;
  count$: Observable<iState>;

  constructor(public store: Store<{ counter: iState }>) {
    this.count$ = store.select('counter');
  }

  ngOnInit() {}

  reset() {
    this.store.dispatch(reset());
  }

  start() {
    if (!this.isActive) {
      this.isActive = true;
      this.countDown = interval(1000).subscribe(() => {
        this.store.dispatch(increment());
        this.store.dispatch(decrement());
        this.store.dispatch(decrement());
      })
    }
  }

  pauseCounter() {
    if (this.isActive) {
      this.isActive = false;
      this.countDown.unsubscribe();
    }
  }

  ngOnDestroy() {
    this.countDown.unsubscribe();
  }
  
}
