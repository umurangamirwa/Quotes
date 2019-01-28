import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-quote',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {

    Quotes = [
        new Quotes(1,'I think every band is a little cautious when the drummer starts to write tunes','You teach best what you most need to learn',new Date(2002,3,4)),
        new Quotes(2,'I show up ready to play, so I normally try and fit the situation','The best way to pay for a lovely moment is to enjoy it',new Date(2002,4,6)),
        new Quotes(3, 'Only I can change my life. No one can do it for me','Be happy for this moment. This moment is your life',new Date(2002,6,4)),
        new Quotes(4, 'Keep your eyes on the stars, and your feet on the ground','Life is 10% what happens to you and 90% how you react to it',new Date(2002,3,8)),
        new Quotes(5, 'Choose a job you love, and you will never have to work a day in your life','Live life to the fullest and focus on the positive',new Date(2002,2,5)),
        new Quotes(6,'Do not take life too seriously. You will never get out of it alive' ,'I love the way Pharell is laying down great drum tracks. He is a great drummer',new Date(2002,8,7)),
     
    ]
    // completeGoal(isComplete,index){
    //   if (isComplete){
    //       this.Quotes.splice(index,1);
    //       }
    //       }


//     toogleDetails(index){
//       this.Quotes[index].showDescription = !this.Quotes[index].showDescription;
//   }
  constructor() { }
  ngOnInit() {
  }
}