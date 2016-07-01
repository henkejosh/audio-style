# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.create!(
  email: "testingaemail",
  password_digest: "asdklj32",
  session_token: "asldk23"
)

User.create!(
  email: "anothertest",
  password_digest: "23325135sdg",
  session_token: "2q523523asdg"
)

Artist.create!(
  name: "Jeff",
  image_url: "www.jb.com"
)

Artist.create!(
  name: "Beat",
  image_url: "www.tbeat.com"
)

Album.create!(
  artist_id: 1,
  title: "Grace",
  image_url: "www.grace.com"
)

Album.create!(
  artist_id: 2,
  title: "White",
  image_url: "whitealb"
)

Song.create!(
  title: "Mojo Pin",
  album_id: 1,
  duration: "310"
)

Playlist.create!(
  user_id: 1,
  song_id: 1,
  name: "NOla"
)

Song.create!(
  title: "Changes",
  album_id: 2,
  playlist_id: 1
)
