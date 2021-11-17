class NotesController < ApplicationController


  # /notes allows for creation of a note

    def create
        note = Note.create(note_params)
        if note.valid?
          render json: note, status: :created
        else
          render json: note.errors, status: :unprocessable_entity
        end
      end

      private

    def note_params
        params.permit(:note_title, :note_description, :plant_id, :user_id, :image_url)
      end

end
