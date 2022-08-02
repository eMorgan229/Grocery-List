Rails.application.routes.draw do
  
  resources :list_items, only: [:index, :create, :destroy]
  resources :items
  resources :grocery_lists
  resources :users, only: [:show, :create]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
