class Api::PhotosController < ApplicationController

  def index
    @photos = Photo.all.includes(:user, :photo_comments, :collections, :favorited_users, :favorites)

    if (params[:userId])
      @photos = @photos.where(user_id: params[:userId]).includes(:user, :photo_comments, :collections, :favorited_users, :favorites)
    end
  end

  def create
    @photo = Photo.new(photo_params)

    if @photo.save
      render 'show'
    else
      render json: { errors: @photo.errors.full_messages }, status: 422
    end
  end

  def show
    @photo = Photo.find(params[:id]).includes(:user, :photo_comments, :collections, :favorited_users, :favorites)
  end

  def destroy
    @photo = Photo.find(params[:id])
    @photo.destroy
    render 'show'
  end

  private

  def photo_params
    params.require(:photo).permit(:user_id, :title, :description, :photo_url)
  end

end
