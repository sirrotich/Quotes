import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'You cant judge a book by its cover','John','kennedy', new Date(2019,3,22)),
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
