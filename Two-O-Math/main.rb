require "Player"
require "Game"
require "Question"

player1 = Player.new("Player 1");
player2 = Player.new("Player 2");

question = Question.new()
game = Game.new(player1, player2)
game.play
