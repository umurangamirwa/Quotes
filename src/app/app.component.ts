import { Component } from '@angular/core';
import {Quotes} from './quotes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
    goals = [
        new Quotes(1,'Watch Finding Nemo'),
        new Quotes(2,'Buy Cookies'),
        new Quotes(3, 'Get new Phone Case'),
        new Quotes(4, 'Get Dog Food'),
        new Quotes(5, 'Solve math homework'),
        new Quotes(6, 'Plot my world domination plan'),

    ]
}
