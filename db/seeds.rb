# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

User.destroy_all
Photo.destroy_all
PhotoComment.destroy_all
Collection.destroy_all
PhotoCollection.destroy_all
Favorite.destroy_all
Following.destroy_all

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('photos')
ActiveRecord::Base.connection.reset_pk_sequence!('photo_comments')
ActiveRecord::Base.connection.reset_pk_sequence!('collections')
ActiveRecord::Base.connection.reset_pk_sequence!('photo_collections')
ActiveRecord::Base.connection.reset_pk_sequence!('favorites')
ActiveRecord::Base.connection.reset_pk_sequence!('followings')

cloudinary_images = Cloudinary::Api.resources(max_results: 1000)
image_urls = []
uploaded_image_urls = []

cloudinary_images["resources"].each do |image|
  image_name_index = image["url"].rindex(/\//)
  image_urls << image["url"][image_name_index + 1..-1]
end

image_urls.delete("sample.jpg")

user_bio_samples = [
  "I am a simple person who loves making photographs and spending time with my spouse and son. I am fortunate to be able to spend a good amount of time on personal projects, traveling and collaborating with a team of rad people. I make my bed in Nashville, Tennessee and am a sucker for assignments where I have the opportunity to travel.",
  "Raised by Woodwards and tamed by wolves, I live under the influence of one who walked into the wild. Haunted by the allure of point breaks and powder days, steep creeks and tall peaks; I am a hunter gatherer of natural light and candid moments. with an appetite whet with a taste of the unknown and the smell of home, I wander a path paved by open minds and trusting eyes, guided by willing feet...and a desire to bring you with me. From my early days drinking fixer in the dark room, learning zone system and processing 4×5 negatives, to recent trips photographing fashion in Tokyo, surf volunteerism in Peru, a moped odyssey through Spain, rock climbing in Patagonia, or a music festival in California, my pursuit of new experiences pushes me to continually evolve my vision, while reminding me of the importance of carrying my camera with humor, compassion and curiosity.",
  "I’m English, but I live in America. By way of Canada, technically. Photography is my calling, my profession, and the thing that will undoubtedly drive me insane someday. I don’t photograph subjects. I photograph the way they make me feel. Admittedly, it’s a bit of a strange concept. But it’s honest – and it’s the best way to describe my approach to the craft. I wrestle with every image I shoot. I assume perfection is possible and I want to wring it out of every picture. If that’s all you ever know about me, it’s enough to say you know me very, very well.",
  "I was born somewhere, and then grew up. Along the way I went to a prestigious college where I learned about important things. Like student loans. Then I lived in different cities and worked for different famous and important people. Then I ended up where I am now. And this is where I do stuff. I’ve won a bunch of important and/or impressive awards for some of that stuff. I hope to continue doing stuff for sometime now.",
  "I am photographer based in Atlanta, GA. While I have worked in the music industry for nearly a decade, I also complete a lot of editorial, corporate, and commercial assignments. My style and approach is simple, bold, classic, and true. My greatest talents are the ability to mix with any class of people and to get nervous subjects to relax in front of my camera."
]

comment_samples = [
  "Amazing photography with wonderful colors",
  "Simple but very nice picture",
  "A beauty",
  "This is really a great photo. Thank you for sharing and congrats!",
  "Excellent stunning capture!",
  "Wow stunning!",
  "Beautiful shot!",
  "Great work!",
  "Beautiful colors and light",
  "Great perspective",
  "Wow! Fabulous image!",
  "Spectacular!",
  "Fabulous!",
  "Phenomenal!",
  "Beautiful!",
  "Super",
  "Great concept",
  "Excellent composition",
  "Gorgeous!",
  "Amazing",
  "Really good photo",
  "Absolutely stunning!",
  "Nice!",
  "Great shot!",
  "Stunning...",
  "Wow..."
]

photo_title_samples = [
  "Capture the Moment",
  "Everybody Needs Beauty",
  "All Around Me",
  "Discovery",
  "Secret",
  "Life is Beautiful",
  "Memories",
  "Abstraction of Dreams",
  "Shimmering Creation",
  "Singularity and Dimensionality",
  "Contrast and Babble",
  "Contrast of Dreams",
  "Modern Significance",
  "Invisible Element",
  "Metamorphosis",
  "Creation",
  "Vision",
  "Uplifting Abstraction of Sorrow",
  "Perception and Analysis",
  "The Conceptual Eye"
]

photo_description_samples = [
  "I was driving down a country road alone and looked to my left and saw this. I knew I had to stop and capture it with my camera.",
  "The north end of Coniston water remains one of my favorite locations. In winter, when the crowds have gone and the only sound is made by the gentle lap of water against the jetty posts, it is a place of peace and tranquility. Note to self: wide angle is called wide angle for a reason.",
  "The low light of December days is a challenge for every photographer. I hope you enjoy the image and I wish you all a very happy new year.",
  "The weather here is not very good for photography just now so this is another picture dug up from my archives. It's a lovely place to chill and have lunch before exploring the surrounding area.",
  "Sorry for the title, I couldn't help myself. Once it popped into my head it wouldn't go away. My apologies for posting a similar photo previously, but I ended up liking this one better. Thanks for taking the time to look. Hope you enjoy!",
  "First shot in a while.",
  "One from a few months back. Enjoy! Happy New Year!",
  "Thank you very much for your views, favorites, and comments. I appreciate it a lot! I'm still trying to catch up...",
  "Froze my butt off for twenty minutes and not sure how I feel about the result. Thanks for stopping by!",
  "So glad we got a chance to admire this sight again this year. It feels like forever, but it's totally worth the wait. Hoping to be more regular with posting. We'll see what happens!"
]

User.create(username: "demouser123", full_name: "Joe Schmoe", password: "demodemodemo", summary: Faker::Hipster.paragraph(2, false, 4), background_url: "7.jpg")
User.create(username: Faker::Internet.user_name, full_name: Faker::Name.name, password: "password", summary: user_bio_samples.sample, background_url: "4.jpg")
User.create(username: Faker::Internet.user_name, full_name: Faker::Name.name, password: "password", summary: user_bio_samples.sample, background_url: "5.jpg")
User.create(username: Faker::Internet.user_name, full_name: Faker::Name.name, password: "password", summary: user_bio_samples.sample, background_url: "17.jpg")
User.create(username: Faker::Internet.user_name, full_name: Faker::Name.name, password: "password", summary: user_bio_samples.sample, background_url: "1.jpg")
User.create(username: Faker::Internet.user_name, full_name: Faker::Name.name, password: "password", summary: user_bio_samples.sample, background_url: "18.jpg")
User.create(username: Faker::Internet.user_name, full_name: Faker::Name.name, password: "password", summary: user_bio_samples.sample, background_url: "49.jpg")
User.create(username: Faker::Internet.user_name, full_name: Faker::Name.name, password: "password", summary: user_bio_samples.sample, background_url: "53.jpg")

Photo.create(id: 7, user_id: 1, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "7.jpg")
Photo.create(id: 4, user_id: 2, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "4.jpg")
Photo.create(id: 5, user_id: 3, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "5.jpg")
Photo.create(id: 17, user_id: 4, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "17.jpg")
Photo.create(id: 1, user_id: 5, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "1.jpg")
Photo.create(id: 18, user_id: 6, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "18.jpg")
Photo.create(id: 49, user_id: 7, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "49.jpg")
Photo.create(id: 53, user_id: 8, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: "53.jpg")

image_urls.delete("7.jpg")
image_urls.delete("4.jpg")
image_urls.delete("5.jpg")
image_urls.delete("17.jpg")
image_urls.delete("1.jpg")
image_urls.delete("18.jpg")
image_urls.delete("49.jpg")
image_urls.delete("53.jpg")

user_ids = User.pluck(:id)

image_urls.each do |image_url|
  if image_url[0..-5] =~ /^\d+$/
    Photo.create(id: image_url[0..-5].to_i, user_id: user_ids.sample, title: photo_title_samples.sample, description: photo_description_samples.sample, photo_url: image_url, created_at: Faker::Time.backward(350))
  else
    uploaded_image_urls << image_url[0..-5]
  end
end

if uploaded_image_urls.length > 0
  Cloudinary::Api.delete_resources(uploaded_image_urls)
end

ActiveRecord::Base.connection.reset_pk_sequence!('photos')

photo_ids = Photo.pluck(:id)

200.times do
  PhotoComment.create(photo_id: photo_ids.sample, user_id: user_ids.sample, body: comment_samples.sample, created_at: Faker::Time.backward(300))
end

collection_titles = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "White", "Black", "People", "Technology", "Nature", "Places", "Brown"]

collection_titles.each do |title|
  Collection.create(title: title)
end

PhotoCollection.create(photo_id: 1, collection_id: 5)
PhotoCollection.create(photo_id: 1, collection_id: 12)
PhotoCollection.create(photo_id: 1, collection_id: 2)

PhotoCollection.create(photo_id: 2, collection_id: 8)
PhotoCollection.create(photo_id: 2, collection_id: 7)
PhotoCollection.create(photo_id: 2, collection_id: 9)

PhotoCollection.create(photo_id: 3, collection_id: 4)
PhotoCollection.create(photo_id: 3, collection_id: 11)

PhotoCollection.create(photo_id: 4, collection_id: 11)
PhotoCollection.create(photo_id: 4, collection_id: 5)

PhotoCollection.create(photo_id: 5, collection_id: 1)
PhotoCollection.create(photo_id: 5, collection_id: 11)

PhotoCollection.create(photo_id: 6, collection_id: 11)
PhotoCollection.create(photo_id: 6, collection_id: 3)

PhotoCollection.create(photo_id: 7, collection_id: 9)
PhotoCollection.create(photo_id: 7, collection_id: 8)
PhotoCollection.create(photo_id: 7, collection_id: 2)

PhotoCollection.create(photo_id: 8, collection_id: 7)
PhotoCollection.create(photo_id: 8, collection_id: 8)
PhotoCollection.create(photo_id: 8, collection_id: 11)
PhotoCollection.create(photo_id: 8, collection_id: 9)

PhotoCollection.create(photo_id: 9, collection_id: 5)
PhotoCollection.create(photo_id: 9, collection_id: 11)

PhotoCollection.create(photo_id: 10, collection_id: 11)
PhotoCollection.create(photo_id: 10, collection_id: 7)
PhotoCollection.create(photo_id: 10, collection_id: 8)

PhotoCollection.create(photo_id: 11, collection_id: 7)
PhotoCollection.create(photo_id: 11, collection_id: 8)
PhotoCollection.create(photo_id: 11, collection_id: 9)
PhotoCollection.create(photo_id: 11, collection_id: 12)

PhotoCollection.create(photo_id: 12, collection_id: 11)
PhotoCollection.create(photo_id: 12, collection_id: 4)

PhotoCollection.create(photo_id: 13, collection_id: 11)
PhotoCollection.create(photo_id: 13, collection_id: 5)
PhotoCollection.create(photo_id: 13, collection_id: 6)

PhotoCollection.create(photo_id: 14, collection_id: 7)
PhotoCollection.create(photo_id: 14, collection_id: 8)
PhotoCollection.create(photo_id: 14, collection_id: 9)

PhotoCollection.create(photo_id: 15, collection_id: 1)
PhotoCollection.create(photo_id: 15, collection_id: 12)

PhotoCollection.create(photo_id: 16, collection_id: 5)
PhotoCollection.create(photo_id: 16, collection_id: 11)

PhotoCollection.create(photo_id: 17, collection_id: 2)
PhotoCollection.create(photo_id: 17, collection_id: 7)
PhotoCollection.create(photo_id: 17, collection_id: 9)
PhotoCollection.create(photo_id: 17, collection_id: 12)

PhotoCollection.create(photo_id: 18, collection_id: 4)
PhotoCollection.create(photo_id: 18, collection_id: 7)
PhotoCollection.create(photo_id: 18, collection_id: 11)

PhotoCollection.create(photo_id: 19, collection_id: 2)
PhotoCollection.create(photo_id: 19, collection_id: 7)
PhotoCollection.create(photo_id: 19, collection_id: 12)

PhotoCollection.create(photo_id: 20, collection_id: 1)
PhotoCollection.create(photo_id: 20, collection_id: 4)
PhotoCollection.create(photo_id: 20, collection_id: 11)

PhotoCollection.create(photo_id: 21, collection_id: 2)
PhotoCollection.create(photo_id: 21, collection_id: 8)
PhotoCollection.create(photo_id: 21, collection_id: 9)

PhotoCollection.create(photo_id: 22, collection_id: 4)
PhotoCollection.create(photo_id: 22, collection_id: 5)
PhotoCollection.create(photo_id: 22, collection_id: 11)

PhotoCollection.create(photo_id: 23, collection_id: 1)
PhotoCollection.create(photo_id: 23, collection_id: 11)

PhotoCollection.create(photo_id: 24, collection_id: 5)
PhotoCollection.create(photo_id: 24, collection_id: 11)

PhotoCollection.create(photo_id: 26, collection_id: 2)
PhotoCollection.create(photo_id: 26, collection_id: 11)

PhotoCollection.create(photo_id: 27, collection_id: 3)
PhotoCollection.create(photo_id: 27, collection_id: 11)

PhotoCollection.create(photo_id: 28, collection_id: 1)
PhotoCollection.create(photo_id: 28, collection_id: 2)
PhotoCollection.create(photo_id: 28, collection_id: 5)
PhotoCollection.create(photo_id: 28, collection_id: 6)

PhotoCollection.create(photo_id: 29, collection_id: 5)
PhotoCollection.create(photo_id: 29, collection_id: 7)
PhotoCollection.create(photo_id: 29, collection_id: 9)
PhotoCollection.create(photo_id: 29, collection_id: 11)

PhotoCollection.create(photo_id: 30, collection_id: 2)
PhotoCollection.create(photo_id: 30, collection_id: 8)
PhotoCollection.create(photo_id: 30, collection_id: 12)

PhotoCollection.create(photo_id: 31, collection_id: 7)
PhotoCollection.create(photo_id: 31, collection_id: 8)
PhotoCollection.create(photo_id: 31, collection_id: 12)

PhotoCollection.create(photo_id: 32, collection_id: 4)
PhotoCollection.create(photo_id: 32, collection_id: 11)

PhotoCollection.create(photo_id: 33, collection_id: 5)
PhotoCollection.create(photo_id: 33, collection_id: 7)
PhotoCollection.create(photo_id: 33, collection_id: 9)

PhotoCollection.create(photo_id: 34, collection_id: 5)
PhotoCollection.create(photo_id: 34, collection_id: 11)

PhotoCollection.create(photo_id: 35, collection_id: 5)
PhotoCollection.create(photo_id: 35, collection_id: 9)

PhotoCollection.create(photo_id: 36, collection_id: 1)
PhotoCollection.create(photo_id: 36, collection_id: 5)
PhotoCollection.create(photo_id: 36, collection_id: 11)

PhotoCollection.create(photo_id: 37, collection_id: 2)
PhotoCollection.create(photo_id: 37, collection_id: 5)
PhotoCollection.create(photo_id: 37, collection_id: 11)

PhotoCollection.create(photo_id: 38, collection_id: 2)
PhotoCollection.create(photo_id: 38, collection_id: 8)
PhotoCollection.create(photo_id: 38, collection_id: 12)

PhotoCollection.create(photo_id: 39, collection_id: 2)
PhotoCollection.create(photo_id: 39, collection_id: 5)
PhotoCollection.create(photo_id: 39, collection_id: 11)

PhotoCollection.create(photo_id: 40, collection_id: 2)
PhotoCollection.create(photo_id: 40, collection_id: 8)
PhotoCollection.create(photo_id: 40, collection_id: 12)

PhotoCollection.create(photo_id: 41, collection_id: 2)
PhotoCollection.create(photo_id: 41, collection_id: 3)
PhotoCollection.create(photo_id: 41, collection_id: 9)

PhotoCollection.create(photo_id: 42, collection_id: 2)
PhotoCollection.create(photo_id: 42, collection_id: 3)
PhotoCollection.create(photo_id: 42, collection_id: 8)
PhotoCollection.create(photo_id: 42, collection_id: 9)
PhotoCollection.create(photo_id: 42, collection_id: 12)

PhotoCollection.create(photo_id: 43, collection_id: 1)
PhotoCollection.create(photo_id: 43, collection_id: 2)
PhotoCollection.create(photo_id: 43, collection_id: 3)
PhotoCollection.create(photo_id: 43, collection_id: 5)
PhotoCollection.create(photo_id: 43, collection_id: 10)

PhotoCollection.create(photo_id: 44, collection_id: 5)
PhotoCollection.create(photo_id: 44, collection_id: 7)
PhotoCollection.create(photo_id: 44, collection_id: 11)

PhotoCollection.create(photo_id: 45, collection_id: 5)
PhotoCollection.create(photo_id: 45, collection_id: 8)
PhotoCollection.create(photo_id: 45, collection_id: 9)

PhotoCollection.create(photo_id: 46, collection_id: 5)
PhotoCollection.create(photo_id: 46, collection_id: 3)
PhotoCollection.create(photo_id: 46, collection_id: 9)

PhotoCollection.create(photo_id: 47, collection_id: 2)
PhotoCollection.create(photo_id: 47, collection_id: 3)
PhotoCollection.create(photo_id: 47, collection_id: 4)
PhotoCollection.create(photo_id: 47, collection_id: 9)

PhotoCollection.create(photo_id: 48, collection_id: 2)
PhotoCollection.create(photo_id: 48, collection_id: 3)
PhotoCollection.create(photo_id: 48, collection_id: 8)
PhotoCollection.create(photo_id: 48, collection_id: 11)

PhotoCollection.create(photo_id: 49, collection_id: 5)
PhotoCollection.create(photo_id: 49, collection_id: 7)
PhotoCollection.create(photo_id: 49, collection_id: 10)
PhotoCollection.create(photo_id: 49, collection_id: 12)

PhotoCollection.create(photo_id: 50, collection_id: 5)
PhotoCollection.create(photo_id: 50, collection_id: 8)
PhotoCollection.create(photo_id: 50, collection_id: 10)

PhotoCollection.create(photo_id: 51, collection_id: 2)
PhotoCollection.create(photo_id: 51, collection_id: 4)
PhotoCollection.create(photo_id: 51, collection_id: 8)
PhotoCollection.create(photo_id: 51, collection_id: 9)

PhotoCollection.create(photo_id: 52, collection_id: 4)
PhotoCollection.create(photo_id: 52, collection_id: 5)
PhotoCollection.create(photo_id: 52, collection_id: 8)
PhotoCollection.create(photo_id: 52, collection_id: 9)

PhotoCollection.create(photo_id: 53, collection_id: 4)
PhotoCollection.create(photo_id: 53, collection_id: 5)
PhotoCollection.create(photo_id: 53, collection_id: 8)
PhotoCollection.create(photo_id: 53, collection_id: 9)
PhotoCollection.create(photo_id: 53, collection_id: 11)

PhotoCollection.create(photo_id: 54, collection_id: 7)
PhotoCollection.create(photo_id: 54, collection_id: 8)
PhotoCollection.create(photo_id: 54, collection_id: 12)

PhotoCollection.create(photo_id: 55, collection_id: 4)
PhotoCollection.create(photo_id: 55, collection_id: 5)
PhotoCollection.create(photo_id: 55, collection_id: 9)
PhotoCollection.create(photo_id: 55, collection_id: 10)

PhotoCollection.create(photo_id: 56, collection_id: 2)
PhotoCollection.create(photo_id: 56, collection_id: 11)

PhotoCollection.create(photo_id: 57, collection_id: 5)
PhotoCollection.create(photo_id: 57, collection_id: 7)
PhotoCollection.create(photo_id: 57, collection_id: 9)
PhotoCollection.create(photo_id: 57, collection_id: 12)

PhotoCollection.create(photo_id: 58, collection_id: 4)
PhotoCollection.create(photo_id: 58, collection_id: 5)
PhotoCollection.create(photo_id: 58, collection_id: 7)
PhotoCollection.create(photo_id: 58, collection_id: 9)

(65..80).each do |i|
  PhotoCollection.create(photo_id: i, collection_id: 11)
end

(60..62).each do |i|
  PhotoCollection.create(photo_id: i, collection_id: 10)
end

[71,73,74,78,79,67,66,70,61,60].each do |i|
  PhotoCollection.create(photo_id: i, collection_id: 13)
end

[76,77].each do |i|
  PhotoCollection.create(photo_id: i, collection_id: 5)
end

[75,69,65].each do |i|
  PhotoCollection.create(photo_id: i, collection_id: 2)
end

PhotoCollection.create(photo_id: 85, collection_id: 5)
PhotoCollection.create(photo_id: 85, collection_id: 9)

PhotoCollection.create(photo_id: 86, collection_id: 9)
PhotoCollection.create(photo_id: 86, collection_id: 13)

PhotoCollection.create(photo_id: 87, collection_id: 8)
PhotoCollection.create(photo_id: 87, collection_id: 9)

120.times do
  Favorite.create(photo_id: photo_ids.sample, user_id: user_ids.sample)
end

30.times do
  Following.create(follower_id: user_ids.sample, followed_id: user_ids.sample)
end

# 1 "Red", 2 "Orange", 3 "Yellow", 4 "Green", 5 "Blue", 6 "Purple", 7 "White", 8 "Black",
# 9 "People", 10 "Technology", 11 "Nature", 12 "Places", 13 "Brown"
