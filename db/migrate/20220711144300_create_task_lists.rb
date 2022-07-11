class CreateTaskLists < ActiveRecord::Migration[6.1]
  def change
    create_table :task_lists do |t|
      t.string :my_list

      t.timestamps
    end
  end
end
