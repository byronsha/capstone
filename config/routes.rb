Rails.application.routes.draw do

  root "static_pages#root"

  get "home", to: "static_pages#home"

  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :photos, only: [:index]
    resources :collections, only: [:index]
  end

end
