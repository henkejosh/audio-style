Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :new, :show]
    resources :session, only: [:create, :destroy, :new]
  end
end
