class Api::ChannelsController < ApplicationController
  def index
  end

  def show
    @channel = Channel.includes(videos: { thumbnail_attachment: :blob }).find_by(id: params[:id])
    if @channel
      render :show
    else
      render json: ["Channel not found"], status: 404 
    end
  end

  def create
    @channel = current_user.channels.new(channel_params)
    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 422
    end
  end

  def update
    @channel = current_user.channels.find_by(id: params[:id])
    if @channel
      if @channel.update(channel_params)
        render :show
      else
        render json: @channel.errors.full_messages, status: 422
      end
    else
      render json: ["The channel either does not exist or you do not have permission to edit it"], status: 404
    end
  end

  def destroy
    @channel = current_user.channels.find_by(id: params[:id])
    if @channel
      @channel.destroy
      render json: { id: @channel.id }
    else
      render json: ["Channel not found"], status: 404
    end
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :description, :user_id)
  end
end
