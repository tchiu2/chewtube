class Video < ApplicationRecord
  validates :title, presence: true

  belongs_to :uploader,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :User

  has_one_attached :video
  has_one_attached :thumbnail
end
