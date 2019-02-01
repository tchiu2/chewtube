class Api::VideosController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    @videos = Video.includes(:uploader).limit(5).order('id desc')
  end

  def show
    @video = Video.includes(:uploader, :likes).find_by(id: params[:id])
    if @video
      render :show
    else
      render json: ["Video not found"], status: 404
    end
  end

  def create
    if (params[:video][:thumbnail] != '' && params[:video][:video] != '' &&
        params[:video][:thumbnail] && params[:video][:video])
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
    @video = Video.find_by(id: params[:video][:id])
    if @video.update(video_params)
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def destroy
    @video = Video.find_by(id: params[:id])
    if @video
      @video.destroy
      render json: { id: @video.id } 
    else
      render json: ["Video not found"], status: 404
    end
  end

  private

  def video_params
    params.require(:video).permit(:title, :description, :uploader_id, :video, :thumbnail, :id)
  end
end
