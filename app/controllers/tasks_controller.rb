class TasksController < ApplicationController
  
    def index
      tasks = Task.all
      render json: tasks, status: :ok
    end
  
    def show
      render json: Task.find(params[:id])
    end
    
    def create
      task = Taskcreate!(task_params)
      render json: task, status: :created
    end
    
    def destroy
      Task.find(params[:id]).destroy
      head :no_content
    end


    private 

    def task_params
      params.permit(:taskname, :user_id, :category_id)
    end


end
