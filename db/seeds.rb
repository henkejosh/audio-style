# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

guest = User.new(
  email: "guest",
  password: "password",
  profile_img_url: "https://s3.amazonaws.com/f.cl.ly/items/3V3j310Z1y3x1x300f1c/john_coltrane.jpeg"
)
guest.save!

User.create!(
  email: "jimiHendrix",
  password_digest: "asdklj32",
  session_token: "asldk23",
  profile_img_url: "https://s3.amazonaws.com/f.cl.ly/items/0H051M1Z3L3a2l1Y1G2b/jimi.jpg"
)

User.create!(
  email: "johnLennon",
  password_digest: "23325135sdg",
  session_token: "2q523523asdg",
  profile_img_url: "https://s3.amazonaws.com/f.cl.ly/items/351L1C0l18252C0r2G1U/john_lennon.jpg"
)

User.create!(
  email: "janisJoplin",
  password_digest: "23325135sdg",
  session_token: "2q523523asdg",
  profile_img_url: "https://s3.amazonaws.com/f.cl.ly/items/0x1p2Q1J0N0q0h2U1w1m/janis.jpeg"
)

User.create!(
  email: "jeffBuckley",
  password_digest: "23325135sdg",
  session_token: "2q523523asdg",
  profile_img_url: "https://s3.amazonaws.com/f.cl.ly/items/282o2O3Z0n1A1J27381f/buckley.jpeg"
)

User.create!(
  email: "louReed",
  password_digest: "23325135sdg",
  session_token: "2q523523asdg",
  profile_img_url: "https://s3.amazonaws.com/f.cl.ly/items/3I28241p3G1X2H0Y3p2m/lou_reed.jpeg"
)

User.create!(
  email: "mickJagger",
  password_digest: "23325135sdg",
  session_token: "2q523523asdg",
  profile_img_url: "https://s3.amazonaws.com/f.cl.ly/items/2N0y2x0E2f3q3W1h1m3R/jagger.jpeg"
)

Artist.create!(
name: "Miles Davis",
)

Album.create!(
  artist_id: 1,
  title: "Kind of Blue",
  image_url: "https://res.cloudinary.com/dg2yejdpt/image/upload/v1467739480/a_-_Front_lscrcq.jpg"
)

Song.create!(
  title: "So What",
  album_id: 1,
  song_url: "https://res.cloudinary.com/dg2yejdpt/video/upload/v1467740825/01_So_What_tpyarx.mp3"
)

Song.create!(
  title: "Freddie Freeloader",
  album_id: 1,
  song_url: "https://res.cloudinary.com/dg2yejdpt/video/upload/v1467910499/02_Freddie_Freeloader_ynsa54.mp3"
)

Song.create!(
  title: "Blue in Green",
  album_id: 1,
  song_url: "https://res.cloudinary.com/dg2yejdpt/video/upload/v1467740420/03_Blue_In_Green_xkjav5.mp3"
)

Song.create!(
  title: "All Blues",
  album_id: 1,
  song_url: "https://res.cloudinary.com/dg2yejdpt/video/upload/v1467741007/04_All_Blues_o0jquz.mp3"
)

Song.create!(
  title: "Flamenco Sketches",
  album_id: 1,
  song_url: "https://res.cloudinary.com/dg2yejdpt/video/upload/v1467741094/05_Flamenco_Sketches_sdcnnz.mp3"
)


Playlist.create!(
  user_id: 1,
  name: "Guest Songs"
)

Comment.create!(
  body: "So good",
  user_id: 1,
  song_id: 1,
  time_into_song: 0
)

Comment.create!(
  body: "Best song!",
  user_id: 3,
  song_id: 2,
  time_into_song: 0
)

Comment.create!(
  body: "I love this one!",
  user_id: 2,
  song_id: 3,
  time_into_song: 0
)

Comment.create!(
  body: "I forgot to ask - do you like guacamole?",
  user_id: 2,
  song_id: 4,
  time_into_song: 0
)

Comment.create!(
  body: "Great jam!",
  user_id: 3,
  song_id: 5,
  time_into_song: 0
)

Comment.create!(
  body: "Special",
  user_id: 3,
  song_id: 5,
  time_into_song: 4
)
####

Comment.create!(
  body: "YASSS",
  user_id: 2,
  song_id: 1,
  time_into_song: 20
)

Comment.create!(
  body: "Best song!",
  user_id: 3,
  song_id: 3,
  time_into_song: 20
)

Comment.create!(
  body: "I love this one!",
  user_id: 2,
  song_id: 2,
  time_into_song: 20
)

Comment.create!(
  body: "I forgot to ask - do you like guacamole?",
  user_id: 2,
  song_id: 5,
  time_into_song: 20
)

Comment.create!(
  body: "OMG",
  user_id: 3,
  song_id: 4,
  time_into_song: 20
)

Comment.create!(
  body: "Special",
  user_id: 3,
  song_id: 5,
  time_into_song: 4
)
####

Comment.create!(
  body: "So good",
  user_id: 1,
  song_id: 1,
  time_into_song: 4
)

Comment.create!(
  body: "Great jam!",
  user_id: 1,
  song_id: 1,
  time_into_song: 20
)

Comment.create!(
  body: "Great jam!",
  user_id: 2,
  song_id: 2,
  time_into_song: 13
)

Comment.create!(
  body: "Great jam!",
  user_id: 1,
  song_id: 3,
  time_into_song: 13
)

Comment.create!(
  body: "Great jam!",
  user_id: 1,
  song_id: 4,
  time_into_song: 13
)

Comment.create!(
  body: "Special",
  user_id: 3,
  song_id: 5,
  time_into_song: 15
)

Comment.create!(
  body: "Great song!",
  user_id: 3,
  song_id: 5,
  time_into_song: 17
)
# #####
# #####
# #####


Comment.create!(
  body: "Real nice song",
  user_id: 2,
  song_id: 2,
  time_into_song: 17
)

Comment.create!(
  body: "Really good song",
  user_id: 1,
  song_id: 3,
  time_into_song: 10
)

Comment.create!(
  body: "Special",
  user_id: 2,
  song_id: 2,
  time_into_song: 18
)

Comment.create!(
  body: "Real nice",
  user_id: 1,
  song_id: 4,
  time_into_song: 16
)

Comment.create!(
  body: "Really good song",
  user_id: 3,
  song_id: 5,
  time_into_song: 18
)

# #####
# #####
# #####

Comment.create!(
  body: "Special",
  user_id: 4,
  song_id: 1,
  time_into_song: 12
)

Comment.create!(
  body: "Special",
  user_id: 5,
  song_id: 3,
  time_into_song: 13
)

Comment.create!(
  body: "Special",
  user_id: 1,
  song_id: 4,
  time_into_song: 11
)

###comments per artist and song
##Song 1
Comment.create!(
  body: "So good",
  user_id: 1,
  song_id: 1,
  time_into_song: 5
)

Comment.create!(
  body: "Great jam!",
  user_id: 2,
  song_id: 1,
  time_into_song: 7
)

Comment.create!(
  body: "Great jam!",
  user_id: 3,
  song_id: 2,
  time_into_song: 10
)

Comment.create!(
  body: "Great jam!",
  user_id: 4,
  song_id: 3,
  time_into_song: 12
)

Comment.create!(
  body: "Great jam!",
  user_id: 5,
  song_id: 4,
  time_into_song: 14
)

#song 2
Comment.create!(
  body: "So good",
  user_id: 1,
  song_id: 2,
  time_into_song: 5
)

Comment.create!(
  body: "Great jam!",
  user_id: 2,
  song_id: 2,
  time_into_song: 7
)

Comment.create!(
  body: "Great jam!",
  user_id: 3,
  song_id: 2,
  time_into_song: 10
)

Comment.create!(
  body: "Great jam!",
  user_id: 4,
  song_id: 2,
  time_into_song: 12
)

Comment.create!(
  body: "Great jam!",
  user_id: 5,
  song_id: 2,
  time_into_song: 14
)

#song 3
Comment.create!(
  body: "So good",
  user_id: 1,
  song_id: 3,
  time_into_song: 5
)

Comment.create!(
  body: "Great jam!",
  user_id: 2,
  song_id: 3,
  time_into_song: 7
)

Comment.create!(
  body: "Great jam!",
  user_id: 3,
  song_id: 3,
  time_into_song: 10
)

Comment.create!(
  body: "Great jam!",
  user_id: 4,
  song_id: 3,
  time_into_song: 12
)

Comment.create!(
  body: "Great jam!",
  user_id: 5,
  song_id: 3,
  time_into_song: 14
)

#song 4
Comment.create!(
  body: "So good",
  user_id: 1,
  song_id: 4,
  time_into_song: 5
)

Comment.create!(
  body: "Great jam!",
  user_id: 2,
  song_id: 4,
  time_into_song: 7
)

Comment.create!(
  body: "Great jam!",
  user_id: 3,
  song_id: 4,
  time_into_song: 10
)

Comment.create!(
  body: "Great jam!",
  user_id: 4,
  song_id: 4,
  time_into_song: 12
)

Comment.create!(
  body: "Great jam!",
  user_id: 5,
  song_id: 4,
  time_into_song: 14
)

#song 5
Comment.create!(
  body: "So good",
  user_id: 1,
  song_id: 5,
  time_into_song: 5
)

Comment.create!(
  body: "Great jam!",
  user_id: 2,
  song_id: 5,
  time_into_song: 7
)

Comment.create!(
  body: "Great jam!",
  user_id: 3,
  song_id: 5,
  time_into_song: 10
)

Comment.create!(
  body: "Great jam!",
  user_id: 4,
  song_id: 5,
  time_into_song: 12
)

Comment.create!(
  body: "Great jam!",
  user_id: 5,
  song_id: 5,
  time_into_song: 14
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
