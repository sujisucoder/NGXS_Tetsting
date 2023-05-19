import { Component, OnInit } from '@angular/core';
import { CounterState } from '../state/increment.state';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  
  @Select('counter')
  counterState!: CounterState;

  constructor() { }

  ngOnInit() { }

  increment() {
    this.counterState.increment();
  }

  decrement() {
    this.counterState.decrement();
  }

  reset() {
    this.counterState.reset();
  }

}
