class User < ActiveRecord::Base
  validates :username, :password_digest, :session_token, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }

  attr_reader :password

  has_many :photos
  has_many :photo_comments
  has_many :favorites
  has_many :favorited_photos, through: :favorites, source: :photo

  has_many :followers,
    foreign_key: :followed_id,
    class_name: "Following"

  has_many :followings,
    foreign_key: :follower_id,
    class_name: "Following"

  has_many :follower_users, through: :followers, source: :follower
  has_many :followed_users, through: :followings, source: :followed

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user && user.valid_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
