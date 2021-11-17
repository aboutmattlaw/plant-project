# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



User.create(username: 'aboutmattlaw1', email: 'aboutmattlaw@gmail.com', password: 'password123' ) 
User.create(username: 'aboutmattlaw2', email: 'aboutmattlaw@gmail.com', password: 'password123' ) 
User.create(username: 'aboutmattlaw3', email: 'aboutmattlaw@gmail.com', password: 'password123' ) 

Garden.create(garden_name: 'Garden 1', user_id: 9)  
Garden.create(garden_name: 'Garden 2', user_id: 9)  
Garden.create(garden_name: 'Garden 3', user_id: 9)  
Garden.create(garden_name: 'Garden 4', user_id: 9)  
Garden.create(garden_name: 'Garden 5', user_id: 10)  
Garden.create(garden_name: 'Garden 6', user_id: 10)  
Garden.create(garden_name: 'Garden 7', user_id: 10)  
Garden.create(garden_name: 'Garden 8', user_id: 11)  
Garden.create(garden_name: 'Garden 9', user_id: 14)  

Plant.create(plant_name: 'Plant 1', garden_id: 1) 
Plant.create(plant_name: 'Plant 2', garden_id: 2) 
Plant.create(plant_name: 'Plant 3', garden_id: 3) 
Plant.create(plant_name: 'Plant 4', garden_id: 4) 
Plant.create(plant_name: 'Plant 5', garden_id: 5) 
Plant.create(plant_name: 'Plant 6', garden_id: 6) 
Plant.create(plant_name: 'Plant 7', garden_id: 7)  



# Plant.create 

# Garden.create 

# Note.create 

# Comment.create 

# password_digest: BCrypt::Password.create('Your_Password')