class CreatePlaylists < ActiveRecord::Migration
  def change
    create_table :playlists do |t|
      t.integer :user_id, null: false, index: true
      t.integer :song_id, null: false, index: true
      t.string :name
      t.timestamps null: false
    end
  end
end
