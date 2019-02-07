class Api::ViewsController < ApplicationController
  def create
    video = Video.find_by(id: params[:video_id])
    user_id = current_user ? current_user.id : nil
    @view = video.views.new(user_id: user_id)
    if @view.save
      render json: {video_id: @view.video_id, user_id: @view.user_id}
    else
      render json: @view.errors.full_messages, status: 422
    end
  end
end
