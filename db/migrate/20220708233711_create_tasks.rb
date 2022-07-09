class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :taskname
      t.integer :user_id
      t.integer :task_list_id

      t.timestamps
    end
  end
end
