Rails.application.routes.draw do
  root "scoreboard#new"
  get 'scoreboard', to: "scoreboard#new"
  get 'record', to: "scoreboard#new"
  get 'people', to: "scoreboard#new"
end
