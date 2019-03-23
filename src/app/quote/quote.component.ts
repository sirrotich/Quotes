import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [
    new Quote(1, 'You cant judge a book by its cover','Author: John','publisher: Rotich'),
  ]

  toogleDetails(index){
    // this.quotes[index].showAuthor = !this.quotes[index].showAuthor;
    this.quotes[index].showPublisher = !this.quotes[index].showPublisher;
  }
  constructor() { }

  ngOnInit() {
  }

}
