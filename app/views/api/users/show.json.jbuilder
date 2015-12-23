json.id @user.id
json.username @user.username
json.full_name @user.full_name
json.summary @user.summary
json.created_at @user.created_at.strftime('%a %d %b %Y')

json.photos @user.photos do |photo|
  json.id photo.id
  json.user_id photo.user_id
  json.title photo.title
  json.description photo.description
  json.photo_url photo.photo_url
  json.favorite_count photo.favorites.length
  json.created_at photo.created_at.strftime('%a %d %b %Y')
end

json.followers @user.follower_users do |follower|
  json.id follower.id
  json.username follower.username
  json.full_name follower.full_name
  json.summary follower.summary
  json.created_at follower.created_at.strftime('%a %d %b %Y')
end

json.followed_users @user.followed_users do |followed_user|
  json.id followed_user.id
  json.username followed_user.username
  json.full_name followed_user.full_name
  json.summary followed_user.summary
  json.created_at followed_user.created_at.strftime('%a %d %b %Y')
end

json.favorited_photos @user.favorited_photos do |favorited_photo|
  json.id favorited_photo.id
  json.user_id favorited_photo.user_id
  json.title favorited_photo.title
  json.description favorited_photo.description
  json.photo_url favorited_photo.photo_url
  json.favorite_count favorited_photo.favorites.length
  json.created_at favorited_photo.created_at.strftime('%a %d %b %Y')
end
