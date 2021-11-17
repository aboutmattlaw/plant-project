class GardenSerializer < ActiveModel::Serializer
  attributes :id, :garden_name, :plant_id, :user_id
  has_many :plants
end
