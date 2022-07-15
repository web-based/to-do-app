class TaskSerializer < ActiveModel::Serializer
  attributes :id, :taskname, :user_id
  belongs_to :category
end
