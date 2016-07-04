class Api::CommentsController < ApplicationController
  def index
    @comments = Comment.where(song_id: params[:song_id])
    render "api/comments/index"
  end

  def new
		@comment = Comment.new
		render json: @comment
	end

	def show
		@comment = Comment.find(params[:id])
		render "api/comments/show"
	end

  def destroy
    @comment = Comment.find(params[:id])
    @comment.destroy!
    render "api/comments"
  end

	def create
		@comment = Comment.new(comment_params)

		if @comment.save
			render "api/comments/show"
		else
			render json: @comment.errors, status: 422
		end
	end

	def update
		@comment = Comment.find(params[:id])
		@comment.update_attributes!(comment_params)
		if @comment.save
			render "api/comments/show"
		else
			render json: @comment.errors, status: 422
		end
	end

	private
	def comment_params
		params.require(:comment).permit(:body, :user_id, :time_into_song, :song_id)
	end
end
