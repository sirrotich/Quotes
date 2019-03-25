import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'Be the change that you want to see in the world','carol','Burnett', new Date(2019,3,22)),
    new Quote(1, 'Education survives when what has been learned has been forgotten','Skinner','smith',new Date(2019,3,20)),
  ]

  deleteQuote(isComplete,index){
    if (isComplete){
      let toDelete=confirm(`Want to delete ${this.quotes[index].name}`)
      
      if(toDelete){
      this.quotes.splice(index,1);
      }
    }
  }
  
  toogleDetails(index){
    // this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
    this.quotes[index].showPublisher = !this.quotes[index].showPublisher;
  }

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)

}
  constructor() { }

  ngOnInit() {
  }

}
