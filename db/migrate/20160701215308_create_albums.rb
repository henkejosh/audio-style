class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.integer :artist_id, index: true, null: false
      t.string :title, null: false
      t.string :image_url
      t.timestamps null: false
    end
  end
end
