Rails.application.routes.draw do
  resources :tasklists
  resources :tasks
  resources :users
  get '/hello', to: 'application#hello_world'
  get '*path',
    to: 'fallback#index',
    constraints: ->(req) { !req.xhr? && req.format.html? }
end