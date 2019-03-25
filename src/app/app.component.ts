import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote(1, 'Be the change that you want to see in the world','carol','Burnett', new Date(2019,3,22)),
    new Quote(1, 'Education survives when what has been learned has been forgotten','Skinner','smith',new Date(2019,3,20)),
    
  ]

  
}
