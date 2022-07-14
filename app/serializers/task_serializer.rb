class TaskSerializer < ActiveModel::Serializer
  attributes :id, :taskname, :user_id, :category_id
end
