class GardensController < ApplicationController

# /gardens shows all gardens with plants in each garden

    def index
        gardens = Garden.all
          render json: gardens, status: :ok
      end


# /gardens/:id shows plants in the garden with notes and comments

      def show
        garden = Garden.find_by(id: params[:id])
     if garden
       render json: garden, include: ['plants', 'plants.notes', 'plants.comments'], status: 200
     else
       render json: { error: 'what?' }, status: 404
     end
   end

   # /gardens allows for the creation of a garden

      def create
        garden = Garden.create(garden_params)
        if garden.valid?
          render json: garden, status: :created
        else
          render json: garden.errors, status: :unprocessable_entity
        end
      end
    
      private
    
      def garden_params
        params.permit(:garden_name, :user_id)
      end


end
