class UserSerializer < ActiveModel::Serializer
  attributes :id, :usernaame, :email, :pasword_digest
end
