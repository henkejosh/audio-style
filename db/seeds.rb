# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
guest = User.new(email: "guest", password: "password")
guest.save!

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
name: "Miles Davis",
)

Album.create!(
  artist_id: 1,
  title: "Kind of Blue",
  image_url: "http://res.cloudinary.com/dg2yejdpt/image/upload/v1467739480/a_-_Front_lscrcq.jpg"
)

Song.create!(
  title: "So What",
  album_id: 1,
  song_url: "http://res.cloudinary.com/dg2yejdpt/video/upload/v1467740825/01_So_What_tpyarx.mp3"
)

Song.create!(
  title: "Freddie Freeloader",
  album_id: 1,
  song_url: "http://res.cloudinary.com/dg2yejdpt/video/upload/v1467910499/02_Freddie_Freeloader_ynsa54.mp3"
)

Song.create!(
  title: "Blue in Green",
  album_id: 1,
  song_url: "http://res.cloudinary.com/dg2yejdpt/video/upload/v1467740420/03_Blue_In_Green_xkjav5.mp3"
)

Song.create!(
  title: "All Blues",
  album_id: 1,
  song_url: "http://res.cloudinary.com/dg2yejdpt/video/upload/v1467741007/04_All_Blues_o0jquz.mp3"
)

Song.create!(
  title: "Flamenco Sketches",
  album_id: 1,
  song_url: "http://res.cloudinary.com/dg2yejdpt/video/upload/v1467741094/05_Flamenco_Sketches_sdcnnz.mp3"
)

# Album.create!(
#   artist_id: 1,
#   title: "Grace",
#   image_url: "https://upload.wikimedia.org/wikipedia/en/e/e4/Jeff_Buckley_grace.jpg"
# )
#
# Album.create!(
#   artist_id: 2,
#   title: "Crooked Rain, Crooked Rain",
#   image_url: "http://f.cl.ly/items/2I0M121z2b1A0Q3X0y2S/220px-Pavement_Crooked_Rain.jpg"
# )

Playlist.create!(
  user_id: 1,
  name: "Guest Songs"
)

# Song.create!(
#   title: "Mojo Pin",
#   album_id: 1,
#   duration: "310",
#   playlist_id: 1
# )
#
# Song.create!(
#   title: "Silence Kid",
#   album_id: 2,
#   playlist_id: 1
# )
