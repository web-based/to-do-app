class TestsController < ApplicationController

  def index
    render json: {
      
      "name": "osvaldo",
      "age": 32
    
  }
  end
end
