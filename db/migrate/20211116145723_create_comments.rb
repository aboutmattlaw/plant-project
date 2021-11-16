class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :comment_title
      t.text :comment_description
      t.integer :plant_id
      t.integer :user_id

      t.timestamps
    end
  end
end
