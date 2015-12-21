Rails.application.routes.draw do

  root "static_pages#root"

  get "home", to: "static_pages#home"

  resources :users, only: [:new, :create, :show] do
    resources :photos, only: [:show]
  end
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :photos, only: [:index, :destroy, :create]
    resources :photo_comments, only: [:index, :show, :create]
    resources :collections, only: [:index]
  end

end
