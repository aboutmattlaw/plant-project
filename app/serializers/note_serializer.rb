class NoteSerializer < ActiveModel::Serializer
  attributes :id, :note_title, :note_description, :image_url, :plant_id, :user_id
end
