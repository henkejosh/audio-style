Rails.application.routes.draw do
  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :new, :show]
    resources :session, only: [:create, :destroy, :new]
  end
end
