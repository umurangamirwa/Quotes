import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {Quotes} from '../quotes';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuotesFormComponent implements OnInit {
 
  newQuotes=new Quotes(0,"","","",new Date(),1,1);
  @Output() addQuotes=new EventEmitter<Quotes>();
  
    
  submitQuotes(){
        this.addQuotes.emit(this.newQuotes);
        this.newQuotes = new Quotes(1,'',"", "",new Date(2019,1,29),1, 1);
       
    }
    constructor() { }

  ngOnInit() {
  }
}
  


