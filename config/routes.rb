Rails.application.routes.draw do
  
  resources :list_items, only: [:create, :destroy]
  resources :items 
  resources :grocery_lists

  # LOGIN routes
  get "/users", to: "users#index"
  get "/me", to: "users#show"
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  
end
