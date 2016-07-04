class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
      t.string :body, null: false
      t.integer :user_id, null: false, index: true
      t.integer :time_into_song, default: 0, null: false, index: true
      t.integer :song_id, null: false, index: true
      t.timestamps null: false
    end
  end
end
