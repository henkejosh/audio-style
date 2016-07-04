if @comments
  json.commentsArr @comments do |comment|
    json.id comment.id
    json.body comment.body
    json.user_id comment.user_id
    json.time_into_song comment.time_into_song
    json.song_id comment.song_id
    json.created_at comment.created_at
    json.updated_at comment.updated_at
  end
  json.songID @comments.first.song_id
end
