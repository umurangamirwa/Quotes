import { Component, OnInit, Input } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
      quotes = [
        new Quotes(1,'Watch Finding Nemo','Andrew', 'mimi',new Date(2019,1,29),1, 1),
        new Quotes(2,'I show up ready to play, so I normally try and fit the situation','Angelo','mimi',new Date(2002,4,6),1,1),
        new Quotes(3, 'Only I can change my life. No one can do it for me','Franmcois','mimi',new Date(2002,6,4),1,1),
        // new Quotes(4, 'Keep your eyes on the stars, and your feet on the ground','Life is 10% what happens to you and 90% how you react to it',new Date(2002,3,8)),
        // new Quotes(5, 'Choose a job you love, and you will never have to work a day in your life','Live life to the fullest and focus on the positive',new Date(2002,2,5)),
        // new Quotes(6,'Do not take life too seriously. You will never get out of it alive' ,'I love the way Pharell is laying down great drum tracks. He is a great drummer',new Date(2002,8,7)),
     
    ]
    toogleDetails(index){
        this.quotes[index].showDescription = !this.quotes[index].showDescription;
    }
    upvote(index){
        this.quotes[index].upvotes++;
    }
    downvote(index){
        this.quotes[index].downvotes--;
    }
    deleteQuotes(isComplete,index){
      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`)
            
      if(toDelete){
          this.quotes.splice(index,1)
      }
  }
  constructor() { }
  ngOnInit() {
    }
    addNewQuotes(quote){
        let quoteLength = this.quotes.length;
        quote.id=quoteLength+1;
        quote.completeDate = new Date(quote.completeDate)
        this.quotes.push(quote)
    
    }
}



    

//  
// //   ngOnInit() {
// //   }

