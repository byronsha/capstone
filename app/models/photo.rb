class Photo < ActiveRecord::Base
  validates :user_id, :title, :photo_url, presence: true

  # def self.in_collection(collection)
  #
  #   if collection == "All"
  #     return self.all
  #   else
  #     results = self.find_by_sql(["
  #       SELECT p.*
  #       FROM photos p
  #         JOIN photo_collections pc ON p.id = pc.photo_id
  #         JOIN collections c ON pc.collection_id = c.id
  #       WHERE c.title = ?
  #     ", collection])
  #   end
  # end

  belongs_to :user
  has_many :photo_comments
  has_many :photo_collections 
  has_many :collections, through: :photo_collections

end
