Rails.application.routes.draw do

  root "static_pages#root"

  get "home", to: "static_pages#home"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :photos, only: [:index, :destroy, :create, :show]
    resources :photo_comments, only: [:index, :show, :create, :destroy]
    resources :collections, only: [:index]
    resources :users, only: [:show]
    resources :favorites, only: [:index, :create, :destroy]
    resources :followings, only: [:index, :create, :destroy]
  end

end
