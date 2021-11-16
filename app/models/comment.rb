class Comment < ApplicationRecord
    belongs_to :plant
    belongs_to :user

    validates :comment_title, :comment_description, presence: true

end
