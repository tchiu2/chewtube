class Api::CommentsController < ApplicationController
  before_action :require_logged_in
  
  def create
    @comment = current_user.comments.new(comment_params)
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment
      @comment.destroy
      render json: { id: @comment.id }
    else
      render json: ["Comment not found"], status: 404
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :video_id)
  end
end
