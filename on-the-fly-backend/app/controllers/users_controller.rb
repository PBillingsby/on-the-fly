class UsersController < ApplicationController
  skip_before_action :authorized, only: [:create, :auto_login]
  def create
    user = User.create(user_params)
    if user.valid?
      token = encode_token({user_id: user.id})
      render json: user
    else
      render json: {error: "Invalid username or password"}
    end
  end

  def login
    user = User.find_by(username: params[:username])

    if user && user.authenticate(params[:password])
      token = encode_token({user_id: user.id})
 
      render json: user
    else
      render json: {error: "Invalid username or password"}
    end
  end

  def destroy
    byebug
  end
  def auto_login
    render json: user
  end

  private

  def user_params
    params.permit(:username, :password)
  end
end
