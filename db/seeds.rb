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

ActiveRecord::Base.connection.reset_pk_sequence!('users')
ActiveRecord::Base.connection.reset_pk_sequence!('photos')
ActiveRecord::Base.connection.reset_pk_sequence!('photo_comments')
ActiveRecord::Base.connection.reset_pk_sequence!('collections')
ActiveRecord::Base.connection.reset_pk_sequence!('photo_collections')

User.create(username: Faker::Internet.user_name, full_name: Faker::Name.name, password: "password", summary: Faker::Hipster.paragraph(2, false, 4))
User.create(username: Faker::Internet.user_name, full_name: Faker::Name.name, password: "password", summary: Faker::Hipster.paragraph(2, false, 4))
User.create(username: Faker::Internet.user_name, full_name: Faker::Name.name, password: "password", summary: Faker::Hipster.paragraph(2, false, 4))
User.create(username: Faker::Internet.user_name, full_name: Faker::Name.name, password: "password", summary: Faker::Hipster.paragraph(2, false, 4))
User.create(username: Faker::Internet.user_name, full_name: Faker::Name.name, password: "password", summary: Faker::Hipster.paragraph(2, false, 4))

cloudinary_images = Cloudinary::Api.resources(max_results: 1000)
image_urls = []

cloudinary_images["resources"].each do |image|
  image_name_index = image["url"].rindex(/\//)
  image_urls << image["url"][image_name_index + 1..-1]
end

image_urls.delete("sample.jpg")

user_ids = User.pluck(:id)

image_urls.each do |image_url|
  Photo.create(id: image_url[0..-5].to_i, user_id: user_ids.sample, title: Faker::Lorem.word.capitalize, description: Faker::Hipster.sentence, photo_url: image_url)
end

photo_ids = Photo.pluck(:id)

200.times do
  PhotoComment.create(photo_id: photo_ids.sample, user_id: user_ids.sample, body: Faker::Hipster.paragraph(2, false, 4))
end

collection_titles = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "White", "Black", "People", "Technology", "Nature", "Places"]

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

# 1 "Red", 2 "Orange", 3 "Yellow", 4 "Green", 5 "Blue", 6 "Purple", 7 "White", 8 "Black",
# 9 "People", 10 "Technology", 11 "Nature", 12 "Architecture"
