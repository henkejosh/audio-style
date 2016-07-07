class Song < ActiveRecord::Base
  validates :title, presence: true
  validates :song_url, presence: true, uniqueness: true

  belongs_to :album,
  primary_key: :id,
  foreign_key: :album_id,
  class_name: "Album"

  belongs_to :playlist,
  primary_key: :id,
  foreign_key: :playlist_id,
  class_name: "Playlist"

  has_one :artist,
  through: :album,
  source: :artist
end
