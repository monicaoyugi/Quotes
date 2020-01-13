import { Quote } from "../quote";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-quote-main",
  templateUrl: "./quote-main.component.html",
  styleUrls: ["./quote-main.component.css"]
})
export class QuoteMainComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(
      "Allan",
      "Mahatma Gandhi",
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      0,
      0,
      new Date(2020, 1, 12)
    ),


    new Quote(
      "Dru",
      "Henry Kenya",
      "Javs script is a weired language",
      0,
      0,
      new Date(2020, 1, 12)
    ),
    new Quote(
      "Luisa",
      "Virginia Satir",
      "We must not allow other people’s limited perceptions to define us",
      0,
      0,
      new Date(2020, 1, 12)
    ),
    new Quote(
      "Ray",
      "Friedrich Nietzsche",
      "That which does not kill us makes us stronger..",
      0,
      0,
      new Date(2020, 1, 12)
    )
  ];
  seeDetails(index) {
    this.quotes[index].viewDetails = !this.quotes[index].viewDetails;
  }
  purgeQuote(isDone, index) {
    if (isDone) {
      let toDelete = confirm(`Are you sure you want to delete this Qoute`);
      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }
  addNewQuote(dan) {
    dan.elapse = new Date(dan.elapse)
    this.quotes.push(dan);
   
  }
  addVote(dan, index) {
    if (dan) {
      this.quotes[index].upvote+=1;
    }
  }
lessVote(dan,index){
  if(dan){
    this.quotes[index].downvote+=1
  }
}

initNum:number
finNum:number
counter:number

mostLiked(){
  this.initNum=0
  this.finNum=0
  for (this.counter=0; this.counter < this.quotes.length;this.counter++){
    this.finNum =this.quotes[this.counter].upvote;

    if(this.finNum > this.initNum){
      this.initNum = this.finNum
    }
 
   
    
  }

  return this.initNum;
}
  constructor() { 

  }

  ngOnInit() {

  }
}
