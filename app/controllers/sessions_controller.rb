class SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      sign_in(@user)
      render 'users/show'
    else
      render json: { errors: ["Invalid credentials"] }, status: 401
    end
  end

  def destroy
    sign_out
    render json: {}
  end
end
