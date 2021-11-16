class CommentSerializer < ActiveModel::Serializer
  attributes :id, :comment_title, :comment_description, :plant_id, :user_id
end
