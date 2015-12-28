json.array! @favorites do |favorite|
  json.id favorite.id
  json.user_id favorite.user_id
  json.photo_id favorite.photo_id

  json.user do
    json.id favorite.user.id
    json.username favorite.user.username
  end

  json.photo do
    json.id favorite.photo.id
    json.user_id favorite.photo.user_id
    json.title favorite.photo.title
    json.description favorite.photo.description
    json.photo_url favorite.photo.photo_url
    json.favorite_count favorite.photo.favorites.length
    json.created_at favorite.photo.created_at.strftime('%a %d, %b. %Y')
  end
end
