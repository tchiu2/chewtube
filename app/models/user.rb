class User < ApplicationRecord
  validates :username, :password_digest, presence: true
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  
  has_many :uploaded_videos,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :Video

  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :views

  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(user_or_email, password)
    user = User.where('username LIKE :query OR email LIKE :query', query: user_or_email).first
    user && user.is_password?(password) ? user : nil
  end

  def reset_session_token!
    self.update!(session_token: SecureRandom::urlsafe_base64)
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end
end
