class Garden < ApplicationRecord
    has_many :plants
    belongs_to :user

     validates :garden_name, presence: true

    def garden_plant_notes
        plantsArray = self.plants
        array = plantsArray.map { |plant| {plant_notes: plant.notes} }
        array
    end

end
