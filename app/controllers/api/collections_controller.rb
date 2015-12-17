class Api::CollectionsController < ApplicationController

  def index
    @collections = Collection.all
  end

end
