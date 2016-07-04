if !@songs.empty?
  json.songsArr @songs do |song|
    json.id song.id
    json.title song.title
    json.album_id song.album_id
    json.album_name song.album.title
    json.artist_name song.artist.name
    json.image_url song.album.image_url
    json.created_at song.created_at
    json.updated_at song.updated_at
    json.playlist_id song.playlist_id
    json.duration song.duration
    json.spotify_uri song.spotify_uri
    json.spotify_preview song.spotify_preview
  end
end
