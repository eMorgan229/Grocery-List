Rails.application.routes.draw do
  
  resources :list_items, only: [:create, :destroy]
  resources :items, only: [:index, :show]
  resources :grocery_lists, only: [:index, :show, :update]
  resources :users, only: :show
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
