class Collection < ActiveRecord::Base
  validates :title, presence: true

  has_many :photo_collections
  has_many :photos, through: :photo_collections

end
