class Api::VideosController < ApplicationController
  before_action :require_logged_in, only: [:create, :update, :destroy]

  def index
    if params[:search]
      search
    else
      @videos = Video.with_attached_thumbnail.includes(:channel).limit(5).order('id desc')
    end
  end

  def show
    @video = Video.includes(:channel, :likes).find_by(id: params[:id])
    if @video
      render :show
    else
      render json: ["Video not found"], status: 404
    end
  end

  def create
    if (params[:video][:thumbnail] != '' && params[:video][:video] != '' &&
        params[:video][:thumbnail] && params[:video][:video])
      channel = current_user.channels.find_by(id: params[:video][:channel_id])
      @video = channel.videos.new(video_params)
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
    @video = current_user.uploaded_videos.find_by(id: params[:video][:id])
    if @video.update(video_params)
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def destroy
    @video = current_user.uploaded_videos.find_by(id: params[:id])
    if @video
      @video.destroy
      render json: { id: @video.id } 
    else
      render json: ["Video not found"], status: 404
    end
  end

  private

  def video_params
    params.require(:video).permit(:title, :description, :channel_id, :video, :thumbnail, :id)
  end

  def search
    columns = ['videos.title', 'videos.description', 'channels.name']
    query_words = params[:search].split("+").map(&:downcase)
    query_string = columns
      .product(query_words)
      .map { |tuple| "lower(#{tuple[0]}) LIKE '%#{tuple[1]}%'"}
      .join(" OR ")

    @videos = Video.joins(:channel).where(query_string)
  end
end
