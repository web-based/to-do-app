class User < ApplicationRecord
  has_many :tasks
  has_many :tasklists,through: :tasks
  validates :username, presence: true
  validates :password, presence: true, length: { in: 6..12 }
end
