import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  @Input() value: 'X'| 'O' | '' = '';

  @Input() gameover = false;

  @Input() index : { x: number, y: number} = {x: 0, y:0};

  @Input() currentPlayer :'X'| 'O' = 'X';

  @Output() switchPlayer: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  SwitchPlayer() {
    if(this.value == "" && !this.gameover)
    {
      this.value = this.currentPlayer;
      this.switchPlayer.emit(this.index);
    }
  }

}

