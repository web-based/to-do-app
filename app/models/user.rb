class User < ApplicationRecord
  has_many :tasks
  has_many :tasklists,through: :tasks
  has_secure_password
  validates :username, presence: true, uniqueness: true
  # validates :password, presence: true, length: { in: 6..12 }
end
