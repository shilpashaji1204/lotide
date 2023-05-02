class Question
    attr_reader :answer

    def initialize
        @num1 = rand(1..20)
        @num2 = rand(1..20)
        @answer = @num1 + @num2
      end
    
      def check_answer(user_answer)
        user_answer == @answer
      end

      def display_question
        puts "What is #{@num1} + #{@num2}?"
      end
    end