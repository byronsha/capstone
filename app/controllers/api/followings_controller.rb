class Api::FollowingsController < ApplicationController

  def index
    @followings = Following.all

    if (params[:followerId])
      @followings = @followings.where(follower_id: params[:followerId])
    end
  end

  def create
    @following = Following.new(following_params)

    p following_params

    if @following.save
      render 'create'
    else
      render json: { errors: @following.errors.full_messages }, status: 422
    end
  end

  def destroy
    @following = Following.find(params[:id])
    @following.destroy
    render 'create'
  end

  private

  def following_params
    params.require(:following).permit(:follower_id, :followed_id)
  end

end
