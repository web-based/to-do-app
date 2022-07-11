class SessionsController < ApplicationController
  
  # create method for adding a new user & verifying their login credentials & storing authenticated user's id in the session:
  def create
    user User.find_by(username: params[:username])
    session[:user_id] = user.:id
    render json: user
  end

  def destroy
    session.delete :user_id
    head :no_content
  end
end
