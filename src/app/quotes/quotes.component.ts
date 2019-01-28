import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

    quotes = [
        new Quotes(1,'Watch Finding Nemo','You teach best what you most need to learn'),
        new Quotes(2,'Buy Cookies','The best way to pay for a lovely moment is to enjoy it'),
        new Quotes(3, 'Get new Phone Case','Be happy for this moment. This moment is your life'),
        new Quotes(4, 'Get Dog Food','Life is 10% what happens to you and 90% how you react to it'),
        new Quotes(5, 'Solve math homework','Live life to the fullest and focus on the positive'),
        new Quotes(6, 'Plot my world domination plan','I love the way Pharell is laying down great drum tracks. He is a great drummer'),
    ]

  constructor() { }

  ngOnInit() {
  }
}