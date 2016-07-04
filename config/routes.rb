Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy, :new]
    resources :users, only: [:create, :update, :new, :show]
    
    resources :songs do
      resources :comments
    end

    resources :albums
    resources :artists
    resources :playlists
  end
end
