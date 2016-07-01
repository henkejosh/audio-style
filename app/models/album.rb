class Album < ActiveRecord::Base
  validates :artist_id, :title, presence: true
end
