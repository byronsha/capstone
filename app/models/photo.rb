class Photo < ActiveRecord::Base
  validates :user_id, :title, :photo_url, presence: true

  def self.in_collection(collection)
    
  end

  belongs_to :user
  has_many :photo_comments
  has_many :photo_collections
  has_many :collections, through: :photo_collections

end
