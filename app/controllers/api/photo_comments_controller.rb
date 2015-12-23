class Api::PhotoCommentsController < ApplicationController

  def create
    @photo_comment = PhotoComment.new(photo_comment_params)

    if @photo_comment.save
      render 'create'
    else
      render json: { errors: @photo_comment.errors.full_messages }, status: 422
    end
  end

  def show
    @photo_comments = PhotoComment.where(photo_id: params[:id])
  end

  def destroy
    @photo_comment = PhotoComment.find(params[:id])
    @photo_comment.destroy
    render 'create'
  end

  private

  def photo_comment_params
    params.require(:photo_comment).permit(:photo_id, :user_id, :body)
  end
  
end
