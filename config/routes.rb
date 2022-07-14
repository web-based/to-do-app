Rails.application.routes.draw do

  resources :categories, only: [:index]
  resources :tasks, only: [:index, :show, :create, :destroy]
  resources :users, only: [:index, :show, :create]

  get '/hello', to: 'application#hello_world'
  get '*path', to: 'fallback#index', constraints: ->(req) { !req.xhr? && req.format.html? }

  get "/me", to: "users#show" ## retrieveing the user's data from the database using the sessions hash
  post "/signup", to: "users#create"
  post "/login", to: "sessions#create" ## mapping the user create method for a POST request to /login
  delete "/logout", to: "sessions#destroy"

  get 'users/:user_id/tasks', to: "users#tasks_index" #get respective user's task_lists
    
end