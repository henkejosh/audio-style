class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
    render "api/songs/index"
  end

  def new
		@song = Song.new
		render json: @song
	end

	def show
		@song = Song.find(params[:id])
		# render json: @song
    render "api/songs/show"
	end

  def destroy
    @song = Song.find(params[:id])
    @song.destroy!
    render "api/songs"
  end

	def create
		@song = Song.new(song_params)

		if @song.save
			render json: @song
		else
			render json: @song.errors, status: 422
		end
	end

	def update
		@song = Song.find(params[:id])
		@song.update_attributes!(song_params)
		if @song.save
			render "api/songs/show"
		else
			render json: @song.errors, status: 422
		end
	end

	private
	def song_params
		params.require(:song).permit(:title, :album_id, :playlist_id, :duration, :spotify_uri, :spotify_preview)
	end
end
