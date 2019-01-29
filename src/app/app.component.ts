import { Component } from '@angular/core';
import {Quotes} from './quotes'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  
})
export class AppComponent {
    Quotes = [
        new Quotes(1,'Watch Finding Nemo',"", "",new Date(2005,3,4),1, 1),]
       
}
