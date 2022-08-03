class UsersController < ApplicationController
  #GET /users
  def index
    render json: User.all, status: :ok
  end
  
  #/me
  def show 
    user = User.find_by(id: session[:user_id])
        render json: user, serializer: UserGroceryListSerializer
    # user = User.find(params[:id])
    # render json: user, status: :ok
  end 

  #POST /signup
  def create
    user = User.create(user_params)
    if user.valid?
      session[:user_id] = user.id
      render json: user, status: :ok
    else
      render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
end


private 

  def user_params
      params.permit(:username, :password, :password_confirmation)
  end 
end

