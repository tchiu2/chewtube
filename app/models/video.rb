class Video < ApplicationRecord
  validates :title, :description, presence: true

  belongs_to :channel

  has_many :comments, dependent: :destroy
  has_many :likes, as: :likeable, dependent: :destroy
  has_many :views, dependent: :destroy

  has_one_attached :video
  has_one_attached :thumbnail
end
