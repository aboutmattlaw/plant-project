class Garden < ApplicationRecord
    has_many :plants
    belongs_to :user

     validates :garden_name, presence: true

end
