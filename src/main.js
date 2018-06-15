import Game from './game/Game';

document.addEventListener('DOMContentLoaded', function() {
  const canvas = document.querySelector('#gameArea');
  const context = canvas.getContext('2d');

  const game = new Game(context);

  game.mainLoop.start();
});