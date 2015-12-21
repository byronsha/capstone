class UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      sign_in(@user)
      render 'users/show'
    else
      render json: { errors: @user.errors.full_messages }, status: 422
    end
  end
  
  private

  def user_params
    params.require(:user).permit(:username, :full_name, :password, :summary)
  end
end
