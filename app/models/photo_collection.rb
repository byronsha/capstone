class PhotoCollection < ActiveRecord::Base
  validates :photo_id, :collection_id, presence: true

  belongs_to :photo
  belongs_to :collection

end
