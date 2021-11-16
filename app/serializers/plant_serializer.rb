class PlantSerializer < ActiveModel::Serializer
  attributes :id, :plant_name, :planted_on, :sprouted_on, :flowered_on, :garden_id
end
