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

User.create(username: "byron", full_name: "Byron Sha", password: "cheese", summary: Faker::Hipster.paragraph(2, false, 4), background_url: "7.jpg")
User.create(username: Faker::Internet.user_name, full_name: Faker::Name.name, password: "password", summary: Faker::Hipster.paragraph(6, false, 4), background_url: "4.jpg")
User.create(username: Faker::Internet.user_name, full_name: Faker::Name.name, password: "password", summary: Faker::Hipster.paragraph(6, false, 4), background_url: "5.jpg")
User.create(username: Faker::Internet.user_name, full_name: Faker::Name.name, password: "password", summary: Faker::Hipster.paragraph(6, false, 4), background_url: "17.jpg")
User.create(username: Faker::Internet.user_name, full_name: Faker::Name.name, password: "password", summary: Faker::Hipster.paragraph(6, false, 4), background_url: "1.jpg")
User.create(username: Faker::Internet.user_name, full_name: Faker::Name.name, password: "password", summary: Faker::Hipster.paragraph(6, false, 4), background_url: "18.jpg")
User.create(username: Faker::Internet.user_name, full_name: Faker::Name.name, password: "password", summary: Faker::Hipster.paragraph(6, false, 4), background_url: "49.jpg")
User.create(username: Faker::Internet.user_name, full_name: Faker::Name.name, password: "password", summary: Faker::Hipster.paragraph(6, false, 4), background_url: "53.jpg")

Photo.create(id: 7, user_id: 1, title: Faker::Lorem.word.capitalize, description: Faker::Hipster.paragraph(2, false, 2), photo_url: "7.jpg")
Photo.create(id: 4, user_id: 2, title: Faker::Lorem.word.capitalize, description: Faker::Hipster.paragraph(2, false, 2), photo_url: "4.jpg")
Photo.create(id: 5, user_id: 3, title: Faker::Lorem.word.capitalize, description: Faker::Hipster.paragraph(2, false, 2), photo_url: "5.jpg")
Photo.create(id: 17, user_id: 4, title: Faker::Lorem.word.capitalize, description: Faker::Hipster.paragraph(2, false, 2), photo_url: "17.jpg")
Photo.create(id: 1, user_id: 5, title: Faker::Lorem.word.capitalize, description: Faker::Hipster.paragraph(2, false, 2), photo_url: "1.jpg")
Photo.create(id: 18, user_id: 6, title: Faker::Lorem.word.capitalize, description: Faker::Hipster.paragraph(2, false, 2), photo_url: "18.jpg")
Photo.create(id: 49, user_id: 7, title: Faker::Lorem.word.capitalize, description: Faker::Hipster.paragraph(2, false, 2), photo_url: "49.jpg")
Photo.create(id: 53, user_id: 8, title: Faker::Lorem.word.capitalize, description: Faker::Hipster.paragraph(2, false, 2), photo_url: "53.jpg")

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
    Photo.create(id: image_url[0..-5].to_i, user_id: user_ids.sample, title: Faker::Lorem.word.capitalize, description: Faker::Hipster.paragraph(2, false, 2), photo_url: image_url, created_at: Faker::Time.backward(350))
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
  PhotoComment.create(photo_id: photo_ids.sample, user_id: user_ids.sample, body: Faker::Hipster.paragraph(2, false, 4), created_at: Faker::Time.backward(300))
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

120.times do
  Favorite.create(photo_id: photo_ids.sample, user_id: user_ids.sample)
end

30.times do
  Following.create(follower_id: user_ids.sample, followed_id: user_ids.sample)
end

# 1 "Red", 2 "Orange", 3 "Yellow", 4 "Green", 5 "Blue", 6 "Purple", 7 "White", 8 "Black",
# 9 "People", 10 "Technology", 11 "Nature", 12 "Places", 13 "Brown"
