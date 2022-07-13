Rails.application.routes.draw do
  resources :task_lists, only: [:index, :show, :create, :destroy]
  resources :tasks, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :show, :create]

  # post "/login", to: "sessions#create" ## mapping the user create method for a POST request to /login

  get '/hello', to: 'application#hello_world'
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }

  get "/me", to: "users#show" ## retrieveing the user's data from the database using the sessions hash
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create" ## mapping the user create method for a POST request to /login
  delete "/logout", to: "sessions#destroy"
    
end