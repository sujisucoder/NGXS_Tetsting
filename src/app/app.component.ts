import { Component,OnInit } from '@angular/core';
import { CounterState } from './state/increment.state';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  store: any;
  constructor() { }

  ngOnInit() {
    this.store.select('counter').subscribe((data: any) => {
      console.log(data);
    });
  }
}
