class TasksController < ApplicationController
  
    def index
      tasks = Task.all
      render json: tasks, status: :ok
    end
  
    def show
      render json: Task.find(params[:id])
    end
    
    def create
      task = Task.create!(task_params)
      render json: task, status: :created
    end

    def update
      task = Task.find(params[:id])
      task.update!(task_params)
      render json: task, status: :ok
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
