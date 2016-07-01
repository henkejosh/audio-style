class Playlist < ActiveRecord::Base
  validates :user_id, :name, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: "User"

  has_many :songs,
  primary_key: :id,
  foreign_key: :playlist_id,
  class_name: "Song"
end
