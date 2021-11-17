class PlantsController < ApplicationController



  # /plants shows all plants with notes and comments

    def index
        plants = Plant.all
          render json: plants, status: :ok
      end


# /plants allows for cration of a plant
  
      def create
        plant = Plant.create(plant_params)
        if plant.valid?
          render json: plant, status: :created
        else
          render json: plant.errors, status: :unprocessable_entity
        end
      end
  
# /plants/:id used to add the various XXX_on dates. 


      def update
           updateplant = Plant.find_by(id: params[:id])
        if updateplant
          updateplant.update(updateplant_params)
          render json: updateplant, status: 202
        else
          render json: { error: 'what?' }, status: unprocessable_entity
        end
      end

# /plants:id used to remove a plant from a garden

      def destroy
        pullplant = Plant.find_by(id: params[:id])
     if pullplant
       pullplant.destroy
       render json: {}, status: 404
     else
       render json: { error: 'plant already pulled' }, status: unprocessable_entity
     end
   end
 



      private
    
      def plant_params
        params.permit(:comment_title, :comment_description, :plant_id, :user_id)
      end

      def updateplant_params
        params.permit(:planted_on, :sprouted_on, :flowered_on)
      end

   
end
