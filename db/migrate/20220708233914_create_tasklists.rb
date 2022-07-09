class CreateTasklists < ActiveRecord::Migration[6.1]
  def change
    create_table :tasklists do |t|
      t.string :mylist
      t.integer :user_id
      t.integer :task_id

      t.timestamps
    end
  end
end
