class User < ApplicationRecord
    has_many :gardens
    has_many :plants, through: :gardens

    validates :username, uniqueness: true  
    validates :username, :password_digest, presence: true
 
    
    has_secure_password
end
