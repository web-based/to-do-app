class TasklistSerializer < ActiveModel::Serializer
  attributes :id, :mylist, :user_id, :task_id
end
