class TaskListSerializer < ActiveModel::Serializer
  attributes :id, :my_list
  has_many :tasks
end
