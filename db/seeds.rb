# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.create(username: 'Albert', email: 'albert@gmail.com', password: 'password123' ) 
User.create(username: 'Berry', email: 'berry@gmail.com', password: 'password123' ) 
User.create(username: 'Cam', email: 'cam@gmail.com', password: 'password123' ) 
User.create(username: 'Diana', email: 'diana@gmail.com', password: 'password123' ) 
User.create(username: 'Ed', email: 'ed@gmail.com', password: 'password123' ) 
User.create(username: 'Fran', email: 'fran@gmail.com', password: 'password123' ) 
User.create(username: 'George', email: 'george@gmail.com', password: 'password123' ) 
User.create(username: 'Hal', email: 'hal@gmail.com', password: 'password123' ) 
User.create(username: 'Iona', email: 'iona@gmail.com', password: 'password123' ) 
User.create(username: 'Judy', email: 'judy@gmail.com', password: 'password123' ) 

Garden.create(garden_name: 'All Garden', user_id: 1)  
Garden.create(garden_name: 'Bus Garden', user_id: 2)  
Garden.create(garden_name: 'Cal Garden', user_id: 3)  
Garden.create(garden_name: 'Dead Garden', user_id: 4)  
Garden.create(garden_name: 'Eat Garden', user_id: 5)  
Garden.create(garden_name: 'Fridge Garden', user_id: 6)  
Garden.create(garden_name: 'Garden Garden', user_id: 7)  
Garden.create(garden_name: 'Hot Garden', user_id: 8)  
Garden.create(garden_name: 'Igloo Garden', user_id: 9)  
Garden.create(garden_name: 'Juice Garden', user_id: 10) 

Plant.create(plant_name: 'Apple Tree', garden_id: 1) 
Plant.create(plant_name: 'Blue Bell', garden_id: 2) 
Plant.create(plant_name: 'Clem Tree', garden_id: 3) 
Plant.create(plant_name: 'Dogwood', garden_id: 4) 
Plant.create(plant_name: 'Eat Plant', garden_id: 5) 
Plant.create(plant_name: 'Free Plant', garden_id: 6) 
Plant.create(plant_name: 'Good Plant', garden_id: 7)  
Plant.create(plant_name: 'Hot Plant', garden_id: 8) 
Plant.create(plant_name: 'Ice Tree', garden_id: 9) 
Plant.create(plant_name: 'Juice Tree', garden_id: 10) 

Note.create(note_title: "Note Title 1", note_description: "This is a description.", plant_id: "1", user_id:"1")
Note.create(note_title: "Note Title 2", note_description: "This is a description.", plant_id: "2", user_id:"2")
Note.create(note_title: "Note Title 3", note_description: "This is a description.", plant_id: "3", user_id:"3")
Note.create(note_title: "Note Title 4", note_description: "This is a description.", plant_id: "4", user_id:"4")

Comment.create(comment_title: "Comment Title 1", comment_description: "This is a comment description.", plant_id: "1", user_id:"1")
Comment.create(comment_title: "Comment Title 2", comment_description: "This is a comment description.", plant_id: "2", user_id:"2")
Comment.create(comment_title: "Comment Title 3", comment_description: "This is a comment description.", plant_id: "3", user_id:"3")
Comment.create(comment_title: "Comment Title 4", comment_description: "This is a comment description.", plant_id: "4", user_id:"4")