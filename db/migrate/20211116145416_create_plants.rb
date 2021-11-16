class CreatePlants < ActiveRecord::Migration[6.1]
  def change
    create_table :plants do |t|
      t.string :plant_name
      t.date :planted_on
      t.date :sprouted_on
      t.date :flowered_on
      t.integer :garden_id

      t.timestamps
    end
  end
end
