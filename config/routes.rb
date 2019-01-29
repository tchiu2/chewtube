Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create]
    resource :session, only: [:create, :destroy]
    resources :videos, except: [:new, :edit] 
    resources :comments, only: [:create, :destroy, :show]
  end
end
