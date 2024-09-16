class UserHistoryController < ApplicationController
  def list
    user_histories = UserHistory.all
    render json: { user_histories: user_histories }
  end
end
