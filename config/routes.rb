Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show]
    resource :session, only: [:create, :destroy]
    resources :videos, except: [:new, :edit] do
      post '/likes', to: 'likes#create'
      delete '/likes',  to: 'likes#destroy'
    end
    resources :comments, only: [:create, :destroy] do
      post '/likes', to: 'likes#create'
      delete '/likes',  to: 'likes#destroy'
    end
  end
end
