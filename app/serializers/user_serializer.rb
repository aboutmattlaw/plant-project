class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email
  has_many :gardens
  has_many :plants, through: :gardens
end
