class Photo < ActiveRecord::Base
  validates :user_id, :title, :photo_url, presence: true

  belongs_to :user
  has_many :photo_comments
  has_many :photo_collections
  has_many :collections, through: :photo_collections
  has_many :favorites
  has_many :favorited_users, through: :favorites, source: :user
end
