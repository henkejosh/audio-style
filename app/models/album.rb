class Album < ActiveRecord::Base
  validates :artist_id, :title, presence: true
  validates :spotify_uri, uniqueness: true

  belongs_to :artist,
  primary_key: :id,
  foreign_key: :artist_id,
  class_name: "Artist"

  has_many :songs,
  primary_key: :id,
  foreign_key: :album_id,
  class_name: "Song"
end
