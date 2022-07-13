class SessionsController < ApplicationController
  
  # POST /login
  # create method adds a new user & verifying their login credentials & storing authenticated user's id in the session:
  def create
    user = User.find_by(username: params[:username])
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      render json: user, status: :created
    else
      render json: { errors: "Invalid credentials" }, status: :unauthorized
    end
  end

  #DELETE /logout
  def destroy
    if current_user
      session.clear
    else
      render json: { errors: "No active session" }, status: :unauthorized
    end
  end

end

# &.authenticate(params[:password]