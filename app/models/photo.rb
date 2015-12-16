class Photo < ActiveRecord::Base
  validates :user_id, :title, :photo_url, presence: true

  belongs_to :user
  has_many :photo_comments
end
