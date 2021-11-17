Rails.application.routes.draw do
  
  get 'sessions/create'
  get 'sessions/destroy'
  resources :plants
  resources :comments
  resources :notes
  resources :gardens
  resources :users


  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
