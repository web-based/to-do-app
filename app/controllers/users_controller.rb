class UsersController < ApplicationController
  skip_before_action :authenticate_user

  def index
    render json: User.all
    # render json: User.all.to_json(include: :task_lists)
  end

  def task_lists_index
    # user = User.find(params[:user_id])
    # task_lists = user.task_lists.uniq
    task_lists = current_user.task_lists.uniq
    render json: task_lists
  end

  def show
    if current_user
      render json: current_user, status: :ok
    else
      render json: {error: "Not authorized"}, status: :unauthorized
    end
  end

    # post '/api/signup'
  # def create
  #   user = User.create(user_params)
  #   if user.valid?
  #     session[:user_id] = user.id
  #     render json: user, status: :ok
  #   else
  #     render json: { error: user.errors }, status: :unprocessable_entity
  #   end
  # end
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  private 
  
  def user_params
    params.permit(:username, :password, :password_confirmation)
  end

end
