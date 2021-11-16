class UsersController < ApplicationController

    


    def show
        user = User.find_by(id: session[:user_id])
        if user 
          render json: user, status: :ok
        else
          render json: { error: 'No active session' }, status: :unauthorized
        end
      end


    def create
        user = User.create(user_params)
        if user.valid?
          session[:user_id] = user.id
          render json: user, status: :created
        else
          render json: user.errors, status: :unprocessable_entity
        end
        byebug
      end
    
      private
    
      def user_params
        params.permit(:username, :password, :password_confirmation)
      end

    
end
