class Following < ActiveRecord::Base
  validates :follower_id, :followed_id, presence: true
  validates :follower_id, uniqueness: { scope: :followed_id }
  validate :check_different_users

  belongs_to :followed, class_name: "User"
  belongs_to :follower, class_name: "User"

  def check_different_users
    if self.follower_id == self.followed_id
      errors.add(:follower_id, "You cannot follow yourself")
      errors.add(:followed_id, "You cannot follow yourself")
    end
  end
end
