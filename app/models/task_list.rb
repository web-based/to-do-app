class TaskList < ApplicationRecord
  # has_many :tasks, dependent: :destroy
  # has_many :users, through: :tasks
  # has_many :owners, through: :tasks, source: :user
  # belongs_to :user
end
