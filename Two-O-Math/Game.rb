class Game
    attr_accessor :winner
    attr_reader :current_player
  
    def initialize(player_1, player_2)
        @current_player = player_1
        @player_two = player_2
        @player_one = player_1
        @winner = nil
      end

      def change_player
        @current_player == @player_one ? @current_player = @player_two : @current_player = @player_one 
      end

      def declare_winner
        @current_player == @player_one ? @winner = @player_two : @winner = @player_one
      end
    end