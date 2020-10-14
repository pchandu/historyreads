Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:new, :create] #to add update and destroy later on -- for now, lets just focus on getting the basics functional
    resource :session, only: [:new, :create, :destroy]
  end
end
