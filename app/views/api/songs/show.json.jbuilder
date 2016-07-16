if @song
  json.id @song.id
  json.title @song.title
  json.album_id @song.album_id
  json.album_name @song.album.title
  json.artist_name @song.artist.name
  json.image_url @song.album.image_url
  json.created_at @song.created_at
  json.updated_at @song.updated_at
  json.playlist_id @song.playlist_id
  json.duration @song.duration
  json.song_url @song.song_url
  json.comments @song.comments.each do |comment|
    json.id comment.id
    json.body comment.body
    json.user_id comment.user_id
    json.time_into_song comment.time_into_song
    json.song_id comment.song_id
    json.created_at comment.created_at
    json.updated_at comment.updated_at
    json.song_title comment.song.title
    json.time_into_song comment.time_into_song
    json.user_pic comment.user.profile_img_url
  end
end
