class Comment < ActiveRecord::Base
  validates :body, :user_id, :song_id, presence: true

  after_initialize :default_time_in

  belongs_to :user
  belongs_to :song

  private
  def default_time_in
    self.time_into_song ||= 0
  end
end
