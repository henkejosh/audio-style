class AddPreviewLinkToSongs < ActiveRecord::Migration
  def change
    add_column :songs, :spotify_preview, :string, uniqueness: true
  end
end
