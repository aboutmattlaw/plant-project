class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.string :note_title
      t.text :note_description
      t.string :image_url
      t.integer :plant_id
      t.integer :user_id

      t.timestamps
    end
  end
end
