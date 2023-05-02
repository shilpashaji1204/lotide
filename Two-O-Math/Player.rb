class Player

    attr_reader :name, :health, :health_total
  
    def initialize(name)
      @name = name
      @health = 3
      @health_total = 3
    end
  
    def lose_health
      @health -= 1
    end
  end