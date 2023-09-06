Rails.application.routes.draw do
  root "scoreboard#new"
  get 'records/index', to: "records#index"
end
