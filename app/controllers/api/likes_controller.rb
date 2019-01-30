class Api::LikesController < ApplicationController
  def create
    @like = Like.find_or_initialize_by(
      user_id: params[:like][:user_id],
      likeable_type: params[:like][:likeable_type],
      likeable_id: params[:like][:likeable_id]
    )

    @like.dislike = params[:like][:dislike]

    if @like.save
      render json: ["#{@like.dislike ? "disliked" : "liked"} #{@like.likeable_type} #{@like.likeable_id}"]
    end
  end

  def destroy
    @like = Like.find_by(
      user_id: params[:like][:user_id],
      likeable_type: params[:like][:likeable_type],
      likeable_id: params[:like][:likeable_id]
    )

    if @like
      @like.destroy
      render json: ["removed like for #{@like.likeable_type} #{@like.likeable_id}"]
    else
      render json: ["Like not found"], status: 404
    end
  end

  private

  def like_params
    params.require(:like).permit(:user_id, :dislike, :likeable_type, :likeable_id)
  end
end
