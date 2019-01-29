import { Component } from '@angular/core';
import {Quotes} from './quotes'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
  
})
export class AppComponent {
    Quotes = [
        new Quotes(1,'Watch Finding Nemo','You teach best what you most need to learn',new Date(2005,3,4)), 
        new Quotes(2,'Buy Cookies','The best way to pay for a lovely moment is to enjoy it',new Date(2005,2,3)),
        new Quotes(3, 'Get new Phone Case','Be happy for this moment. This moment is your life',new Date(2005,4,3)),
        new Quotes(4, 'Get Dog Food','Life is 10% what happens to you and 90% how you react to it',new Date(2005,7,8)),
        new Quotes(5, 'Solve math homework','Live life to the fullest and focus on the positive',new Date(2005,7,6)),
        new Quotes(6, 'Plot my world domination plan','I love the way Pharell is laying down great drum tracks. He is a great drummer',new Date(2005,8,8)),
    ]
    deleteQuotes(isComplete,index){
      if (isComplete){
          let toDelete=confirm(`Are you sure you want to delete ${this.Quotes[index].name}`)
          
          if(toDelete){
              this.Quotes.splice(index,1)
          }
      }
  }

       
}
