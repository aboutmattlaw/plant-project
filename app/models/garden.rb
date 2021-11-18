class Garden < ApplicationRecord
    has_many :plants
    belongs_to :user

     validates :garden_name, presence: true

    def garden_plants
        # plantsArray = self.plants
        # array = plantsArray.map { |plant| {plant_notes: plant.notes} }
        # array

        self.plants
    end

end
