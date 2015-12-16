json.array! @photos do |photo|
  json.id photo.id
  json.user_id photo.user_id
  json.title photo.title
  json.description photo.description
  json.photo_url photo.photo_url

  json.user do
    json.id photo.user.id
    json.username photo.user.username
    json.full_name photo.user.full_name
    json.summary photo.user.summary
  end

  json.comments photo.photo_comments do |comment|
    json.id comment.id
    json.username comment.user.username
    json.body comment.body
    json.created_at comment.created_at.strftime('%a %d %b %Y')
  end
end
