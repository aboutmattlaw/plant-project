class GardensController < ApplicationController

    def index
        gardens = Garden.all
          render json: gardens, status: :ok
      end


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
