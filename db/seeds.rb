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

user_ids = User.pluck(:id)

image_urls.each do |image_url|
  Photo.create(user_id: user_ids.sample, title: Faker::Lorem.word.capitalize, description: Faker::Hipster.sentence, photo_url: image_url)
end

photo_ids = Photo.pluck(:id)

200.times do
  PhotoComment.create(photo_id: photo_ids.sample, user_id: user_ids.sample, body: Faker::Hipster.paragraph(2, false, 4))
end
