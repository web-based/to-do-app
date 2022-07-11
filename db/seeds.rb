# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🙎🏼‍♂️ Seeding Users..."
User.create([
  { username: "Adam", password:123 },
  { username: "Beddy", password:321 },
  { username: "Champ", password:555 }
])

puts " 📁 Seeding TaskLists..."
TaskList.create([
  { my_list: "School Stuff" },
  { my_list: "Bills To Pay" },
  { my_list: "Music Lessons" },
  { my_list: "Gift Shopping" },
  { my_list: "Workouts" },
  { my_list: "Job Search" },
  { my_list: "Cooking" },
  { my_list: "Grocery Shopping"},
  { my_list: "Summer Goals"}
])

puts " 📄 Seeding Tasks..."
Task.create([
  { taskname:"HomeWork", user_id:1, task_list_id:1 },
  { taskname:"Project", user_id:1, task_list_id:1 },
  { taskname:"Code Challenge", user_id:1, task_list_id:1 },
  { taskname:"Rent", user_id:1, task_list_id:2 },
  { taskname:"Insurance", user_id:1, task_list_id:2 },
  { taskname:"Credit Card", user_id:1, task_list_id:2 },
  { taskname:"Music Theory", user_id:1, task_list_id:3 },
  { taskname:"Sheet Music", user_id:1, task_list_id:3 },
  { taskname:"Piano Lesson one", user_id:1, task_list_id:3},
  { taskname:"PlayStation", user_id:2, task_list_id:4 },
  { taskname:"3X3 Rubik's Cube", user_id:2, task_list_id:4 },
  { taskname:"iPhone 14", user_id:2, task_list_id:4 },
  { taskname:"Pushups", user_id:2, task_list_id:5 },
  { taskname:"Cruches", user_id:2, task_list_id:5 },
  { taskname:"Deadlifts", user_id:2, task_list_id:5 },
  { taskname:"Finish Resume", user_id:2, task_list_id:6 },
  { taskname:"Job Workshop", user_id:2, task_list_id:6 },
  { taskname:"Network", user_id:2, task_list_id:6 },
  { taskname:"Honey Garlic Salmon", user_id:3, task_list_id:7 },
  { taskname:"BBQ Ribs", user_id:3, task_list_id:7 },
  { taskname:"Sushi Rolls", user_id:3, task_list_id:7 },
  { taskname:"Eggs", user_id:3, task_list_id:8},
  { taskname:"Bread", user_id:3, task_list_id:8},
  { taskname:"Noodles", user_id:3, task_list_id:8},
  { taskname:"Learn Guitar", user_id:3, task_list_id:9},
  { taskname:"Visit Beach", user_id:3, task_list_id:9},
  { taskname:"Loose 15 lb", user_id:3, task_list_id:9}
  ])

  puts " ✅ Done Seeding!"


 



