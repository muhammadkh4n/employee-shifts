Rails.application.routes.draw do
  scope :api, defaults: {format: :json} do
    resources :shops
    resources :staffs
    resources :slots
    resources :weeks
  end
end
