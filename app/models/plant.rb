class Plant < ApplicationRecord
    has_many :notes, dependent: :destroy
    has_many :comments, dependent: :destroy
    belongs_to :garden

    validates :plant_name, presence: true

end
