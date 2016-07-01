class Api::ArtistsController < ApplicationController
  def index
    @artists = Artist.all
    render json: @artists
  end

  def new
		@artist = Artist.new
		render json: @artist
	end

	def show
		@artist = Artist.find(params[:id])
		render json: @artist
	end

  def destroy
    @artist = Artist.find(params[:id])
    @artist.destroy!
    render "api/artists"
  end

	def create
		@artist = Artist.new(artist_params)
		if @artist.save
			render "api/artists/show"
		else
			render json: @artist.errors, status: 422
		end
	end

	def update
		@artist = Artist.find(params[:id])
		@artist.update_attributes!(artist_params)
		if @artist.save
			render "api/artists/show"
		else
			render json: @artist.errors, status: 422
		end
	end

	private
	def artist_params
		params.require(:artist).permit(:name, :image_url)
	end
end
