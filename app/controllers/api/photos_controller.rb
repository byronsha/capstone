class Api::PhotosController < ApplicationController

  def index
    @photos = Photo.all

    # if params[:collection]
    #   @photos = Photo.in_collection(params[:collection])
    # end
  end

  private

  def photo_params
    params.require(:photo).permit(:user_id, :title, :description, :photo_url)
  end

end
