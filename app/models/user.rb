class User < ApplicationRecord
  has_secure_password

  has_many :tasks
  has_many :tasklists,through: :tasks
  validates :username, presence: true, uniqueness: true
  # validates :password, presence: true
end