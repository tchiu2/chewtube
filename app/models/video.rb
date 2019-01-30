class Video < ApplicationRecord
  validates :title, :description, presence: true

  belongs_to :uploader,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :User

  has_many :comments, dependent: :destroy
  has_many :likes, as: :likeable, dependent: :destroy

  has_one_attached :video
  has_one_attached :thumbnail
end
