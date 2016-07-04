class Comment < ActiveRecord::Base
  validates :body, :user_id, :song_id, presence: true

  after_initialize :default_time_in

  private
  def default_time_in
    self.time_into_song ||= 0
  end
end
