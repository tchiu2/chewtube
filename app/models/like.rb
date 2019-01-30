class Like < ApplicationRecord
  validates :dislike, inclusion: { in: [true, false] }

  belongs_to :user
  belongs_to :likeable, polymorphic: true
end
