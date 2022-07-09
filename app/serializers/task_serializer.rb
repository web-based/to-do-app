class TaskSerializer < ActiveModel::Serializer
  attributes :id, :taskname, :user_id, :task_list_id
end
