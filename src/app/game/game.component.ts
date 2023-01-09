import { Component } from '@angular/core';
import { Game } from 'src/models/game';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent {

  pickCardAnimation = false;
  currentCard: string | undefined = '';
  game!: Game;

  constructor() { }

  ngOnInit(){
    this.newGame();
  }

  newGame(){
    this.game = new Game();
    console.log(this.game)
  }

  takeCard(){
      if(!this.pickCardAnimation)
    {
      this.currentCard = this.game.stack.pop();
      this.pickCardAnimation = true;
      console.log('new card is ' + this.currentCard);
      console.log( this.game)

      this.pickCardAnimation = true;

      setTimeout(() => {
        this.game.playedCards.push(this.currentCard as string);
        this.pickCardAnimation = false;
      }, 1500);
    }
  }
}
