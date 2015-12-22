class Api::FavoritesController < ApplicationController

  def index
    @favorites = Favorite.all

    if (params[:userId])
      @favorites = @favorites.where(user_id: params[:userId])
    end
  end

end
