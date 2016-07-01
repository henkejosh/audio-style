class Api::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.all
    render json: @playlists
  end

  def new
		@playlist = Playlist.new
		render json: @playlist
	end

	def show
		@playlist = Playlist.find(params[:id])
		render json: @playlist
	end

  def destroy
    @playlist = Playlist.find(params[:id])
    @playlist.destroy!
    render "api/playlists"
  end

	def create
		@playlist = Playlist.new(playlist_params)

		if @playlist.save
			render "api/playlists/show"
		else
			render json: @playlist.errors, status: 422
		end
	end

	def update
		@playlist = Playlist.find(params[:id])
		@playlist.update_attributes!(playlist_params)
		if @playlist.save
			render "api/playlists/show"
		else
			render json: @playlist.errors, status: 422
		end
	end

	private
	def playlist_params
		params.require(:playlist).permit(:user_id, :name, :song_id)
	end
end
