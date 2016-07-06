class Api::AlbumsController < ApplicationController
  def index
    @albums = Album.all
    render json: @albums
  end

  def new
		@album = Album.new
		render json: @album
	end

	def show
		@album = Album.find(params[:id])
		render json: @album
	end

  def destroy
    @album = Album.find(params[:id])
    @album.destroy!
    render "api/albums"
  end

	def create
		@album = Album.new(album_params)

		if @album.save
			render json: @album
		else
			render json: @album.errors, status: 422
		end
	end

	def update
		@album = Album.find(params[:id])
		@album.update_attributes!(album_params)
		if @album.save
			render "api/albums/show"
		else
			render json: @album.errors, status: 422
		end
	end

	private
	def album_params
		params.require(:album).permit(:artist_id, :title, :image_url, :spotify_uri)
	end
end
