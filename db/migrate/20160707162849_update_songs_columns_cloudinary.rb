class UpdateSongsColumnsCloudinary < ActiveRecord::Migration
  def change
    remove_column :songs, :spotify_uri, :spotify_preview
    add_column :songs, :song_url, :string
  end
end
