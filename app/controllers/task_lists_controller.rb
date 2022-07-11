class TaskListsController < ApplicationController
  
    def index
      render json: TaskList.all
    end
  
    def show
      render json: TaskList.find(params[:id])
    end
  
    def create
      task_list = TaskList.create!(task_list_params)
      render json: task_list, status: :created
    end
  
    # def update
    #   @ = .find(params[:id])
    # end
  
    def destroy
      TaskList.find(params[:id]).destroy
      head :no_content
    end

    private

    def task_list_params
      params.permit(:my_list)
    end

end
