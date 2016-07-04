class AddSpotifyUrItoTracks < ActiveRecord::Migration
  def change
    add_column :songs, :spotify_uri, :string, unique: true
    add_column :albums, :spotify_uri, :string, unique: true
  end
end
