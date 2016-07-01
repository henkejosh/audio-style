class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title, null: false
      t.integer :album_id, index: true
      t.integer :playlist_id, index: true
      t.integer :duration
      t.timestamps null: false
    end
  end
end
