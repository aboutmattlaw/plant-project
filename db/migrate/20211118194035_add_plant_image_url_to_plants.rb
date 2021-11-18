class AddPlantImageUrlToPlants < ActiveRecord::Migration[6.1]
  def change
    add_column :plants, :plant_image_url, :string
  end
end
