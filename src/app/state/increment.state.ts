import { State, Select } from '@ngxs/store';

@State({
  name: 'counter',
  
})
export class CounterState {
  count!: number ;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }
}
