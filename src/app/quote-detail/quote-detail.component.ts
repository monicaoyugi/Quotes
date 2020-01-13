
import { Quote } from "../quote";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-quote-detail",
  templateUrl: "./quote-detail.component.html",
  styleUrls: ["./quote-detail.component.css"]
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isDone = new EventEmitter<boolean>();

  @Output () voteIncreese = new EventEmitter<boolean>();
  @Output () voteDecrease = new EventEmitter<boolean>();

  fnDecrease(two:boolean){
    this.voteDecrease.emit(two);
  }

  fnIncrease(one:boolean){
    this.voteIncreese.emit(one);
  }
  quoteDan(purge: boolean) {
    this.isDone.emit(purge);
  }
  constructor() {}

  ngOnInit() {}
}
