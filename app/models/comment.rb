class Comment < ApplicationRecord
  validates :body, presence: true

  has_many :likes, as: :likeable, dependent: :destroy

  belongs_to :user
  belongs_to :video
end
