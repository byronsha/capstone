class Api::PhotosController < ApplicationController

  def index
    @photos = Photo.all
  end

  private

  def photo_params
    params.require(:photo).permit(:user_id, :title, :description, :photo_url)
  end

end
