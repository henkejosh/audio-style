class Api::PlaylistsController < ApplicationController
  def index
    @playlists = Playlist.all
    render json: @playlists
  end

  def new
		@album = Playlist.new
		render json: @album
	end

	def show
		@album = Playlist.find(params[:id])
		render json: @album
	end

  def destroy
    @album = Playlist.find(params[:id])
    @album.destroy!
    render "api/playlists"
  end

	def create
		@album = Playlist.new(album_params)

		if @album.save
			render "api/playlists/show"
		else
			render json: @album.errors, status: 422
		end
	end

	def update
		@album = Playlist.find(params[:id])
		@album.update_attributes!(album_params)
		if @album.save
			render "api/playlists/show"
		else
			render json: @album.errors, status: 422
		end
	end

	private
	def album_params
		params.require(:album).permit(:artist_id, :title, :image_url)
	end
end
