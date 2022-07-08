# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🙎🏼‍♂️ Seeding Users..."
Users.create([
  { username: "Adam", password:123 }
  { username: "Beddy", password:321 }
  { username: "Champ", password:555 }
])

puts " Seeding TaskList..."
TaskList.create([
  { mylist: "School Stuff", user_id:1, task_id:2, }
  { mylist: "School Stuff", user_id:2, task_id:2, }
  { mylist: "School Stuff", user_id:3, task_id:2, }
  { mylist: "School Stuff", user_id:1, task_id:2, }
  { mylist: "School Stuff", user_id:2, task_id:2, }
  { mylist: "School Stuff", user_id:3, task_id:2, }
  { mylist: "School Stuff", user_id:1, task_id:2, }
  { mylist: "School Stuff", user_id:2, task_id:2, }
  { mylist: "School Stuff", user_id:3, task_id:2, }
])


 



