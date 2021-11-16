class Note < ApplicationRecord
    belongs_to :plant
    belongs_to :user
     
    validates :note_title, :note_description, presence: true

end
