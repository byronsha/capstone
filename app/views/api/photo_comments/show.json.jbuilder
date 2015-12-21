json.array! @photo_comments do |photo_comment|
  json.id photo_comment.id
  json.photo_id photo_comment.photo_id
  json.user_id photo_comment.user_id
  json.body photo_comment.body
  json.username photo_comment.user.username
  json.created_at photo_comment.created_at.strftime('%a %d %b %Y')
end
