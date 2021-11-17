class PlantsController < ApplicationController


    def index
        plants = Plant.all
          render json: plants, status: :ok
      end



      def create
        plant = Plant.create(plant_params)
        if plant.valid?
          render json: plant, status: :created
        else
          render json: plant.errors, status: :unprocessable_entity
        end
      end
  

      def destroy
           pullplant = Plant.find_by(id: params[:id])
        if pullplant
          pullplant.destroy
          render json: {}, status: 202
        else
          render json: { error: 'plant already pulled' }, status: 404
        end
      end
    
    




      private
    
      def plant_params
        params.permit(:comment_title, :comment_description, :plant_id, :user_id)
      end


end
