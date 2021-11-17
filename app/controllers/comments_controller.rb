class CommentsController < ApplicationController
    

    def create
        comment = Comment.create(comment_params)
        if comment.valid?
          render json: comment, status: :created
        else
          render json: comment.errors, status: :unprocessable_entity
        end
      end
    

      def comment_params
        params.permit(:comment_title, :comment_description, :user_id, :plant_id)
      end

end
