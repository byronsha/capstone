json.id @photo.id
json.user_id @photo.user_id
json.title @photo.title
json.description @photo.description
json.photo_url @photo.photo_url

json.user do
  json.id @photo.user.id
  json.username @photo.user.username
  json.full_name @photo.user.full_name
  json.summary @photo.user.summary
end
