import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tictactoe';

  currentPlayer: 'X' | 'O' = 'X';

  tictactoe = [['','',''],['','',''],['','','']];

  successfullMessage = false;

  switchPlayer(index: any) {
    this.tictactoe[index.x][index.y] = this.currentPlayer;

    if(this.tictactoe[index.x][0] === this.tictactoe[index.x][1] && this.tictactoe[index.x][0] === this.tictactoe[index.x][2]) {
      this.successfullMessage = true;
      return
    }

    if(this.tictactoe[0][index.y] === this.tictactoe[1][index.y] && this.tictactoe[0][index.y] === this.tictactoe[2][index.y]) {
      this.successfullMessage = true;
      return
    }

    if(this.tictactoe[1][1] != "" && this.tictactoe[0][0] == this.tictactoe[1][1] && this.tictactoe[0][0] == this.tictactoe[2][2]){
      this.successfullMessage = true;
      return
    }


    if(this.tictactoe[1][1] != "" &&  this.tictactoe[2][0] == this.tictactoe[1][1] && this.tictactoe[2][0] == this.tictactoe[0][2]){
      this.successfullMessage = true;
      return
    }

    this.currentPlayer = this.currentPlayer == 'X' ? 'O' : 'X';
  }

}
