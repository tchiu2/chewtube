class Api::ChannelsController < ApplicationController
  def index
  end

  def show
  end

  def create
  end

  def update
  end

  def destroy
  end

  private

  def channel_params
    params.require(:channel).permit(:name, :description, :user_id)
  end
end
