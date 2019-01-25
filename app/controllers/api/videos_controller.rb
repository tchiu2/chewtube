class Api::VideosController < ApplicationController
  def index
  end

  def show
    @video = Video.find(params[:id])
  end

  def create
    if params[:video][:thumbnail] != '' && params[:video][:video] != ''
      @video = Video.new(video_params)
      if @video.save
        render :show
      else
        render json: @video.errors.full_messages, status: 422
      end
    else
      render json: ["Thumbnail and video file required"], status: 422
    end
  end

  def update
  end

  def destroy
  end

  private

  def video_params
    params.require(:video).permit(:title, :description, :uploader_id, :video, :thumbnail)
  end
end
