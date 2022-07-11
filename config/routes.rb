Rails.application.routes.draw do
  resources :task_lists
  resources :tasks
  resources :users
  get '/hello', to: 'application#hello_world'
  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }

    get "/login", to: "sessions#create" ## mapping the user create method for a POST request to /login
    get "/me", to: "users#show" ## retrieveing the user's data from the database using the sessions hash
    delete '/logout', to: "sessions#destroy"
    
end