import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {

  @Input() name: any;
  @Input() playerActive: boolean = false;

  @Input() id: any;
  @Input() game: any;

  deletePlayer() {
    this.game.players.splice(this.id, 1);
  }
}
