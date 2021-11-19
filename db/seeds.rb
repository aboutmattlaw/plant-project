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
Garden.create(garden_name: 'Beauty Garden', user_id: 2)  
Garden.create(garden_name: 'Clear Garden', user_id: 3)  
Garden.create(garden_name: 'Dream Garden', user_id: 4)  
Garden.create(garden_name: 'Early Garden', user_id: 5)  
Garden.create(garden_name: 'Free Garden', user_id: 6)  
Garden.create(garden_name: 'Gorge Garden', user_id: 7)  
Garden.create(garden_name: 'Heat Garden', user_id: 8)  
Garden.create(garden_name: 'Ice Garden', user_id: 9)  
Garden.create(garden_name: 'Juice Garden', user_id: 10) 

Plant.create(plant_name: 'Apple Tree', garden_id: 1, plant_image_url: 'https://cdn.vox-cdn.com/thumbor/pTb4BLvbiYpD3RlvdTx0OzcbG_A=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21758584/AdobeStock_26788681.0.0.jpg') 
Plant.create(plant_name: 'Blue Bell', garden_id: 2, plant_image_url: 'https://www.floraqueen.com/blog/wp-content/uploads/2020/01/shutterstock_611801570.jpg') 
Plant.create(plant_name: 'Clem Tree', garden_id: 3, plant_image_url: 'http://cdn.shopify.com/s/files/1/0059/8835/2052/products/Easy_Peel_Clementine_FGT_600x600_7715f8b8-7ade-444c-b849-5c8b79e452e4_grande.jpg?v=1612444191') 
Plant.create(plant_name: 'Dogwood', garden_id: 4, plant_image_url: 'http://cdn.shopify.com/s/files/1/0059/8835/2052/products/White_Dogwood_15_FGT_grande.jpg?v=1627070656') 
Plant.create(plant_name: 'Eat Plant', garden_id: 5, plant_image_url: 'https://cdn.britannica.com/17/192717-050-1A358283/insect-enzymes-Plants-Carnivorous-Venus-Fly-Traps.jpg') 
Plant.create(plant_name: 'Free Plant', garden_id: 6, plant_image_url: 'https://morningchores.com/wp-content/uploads/2020/01/18-Ways-to-Get-Free-Plants-for-Your-Garden-FI.jpg') 
Plant.create(plant_name: 'Good Plant', garden_id: 7, plant_image_url: 'https://media.istockphoto.com/photos/potted-snake-plants-inside-a-beautiful-new-flat-or-apartment-picture-id1268045137?b=1&k=20&m=1268045137&s=170667a&w=0&h=VlbskLfIUPMfIO917CJA355xca8kZIDG36wjmf_vHdE=')  
Plant.create(plant_name: 'Hot Plant', garden_id: 8, plant_image_url: 'https://www.thespruce.com/thmb/miKcsmLslOskzsVHeW2SbkBJZ_s=/1915x1272/filters:fill(auto,1)/red-hot-poker-plants-2131856_09-61a1f183bf7949c881bea8dff94ff30d.jpg') 
Plant.create(plant_name: 'Ice Tree', garden_id: 9, plant_image_url: 'https://i.pinimg.com/originals/6c/21/8f/6c218f2276d99e55e30bb48c68471966.jpg') 
Plant.create(plant_name: 'Juice Tree', garden_id: 10, plant_image_url: 'https://h2.commercev3.net/cdn0.michiganbulb.com/images/500/62752A.jpg') 

Note.create(note_title: "Sweet!", note_description: "It's so nice to see this growing", plant_id: "1", user_id:"1")
Note.create(note_title: "Amazing!", note_description: "Woudl you look at that!", plant_id: "2", user_id:"2")
Note.create(note_title: "Awesome", note_description: "I ddin't think this would grow, but here we are!", plant_id: "3", user_id:"3")
Note.create(note_title: "No Way", note_description: "This is quite nice. ", plant_id: "4", user_id:"4")

Comment.create(comment_title: "Nice Plant, Gardener!", comment_description: "Thanks for posting this", plant_id: "1", user_id:"1")
Comment.create(comment_title: "Congrats", comment_description: "Hoo boy would you give me one??", plant_id: "2", user_id:"2")
Comment.create(comment_title: "Good Work", comment_description: "I knew you cuold do it!", plant_id: "3", user_id:"3")
Comment.create(comment_title: "Who Knew!", comment_description: "Didn't think you were a green thumb, but look at that!", plant_id: "4", user_id:"4")