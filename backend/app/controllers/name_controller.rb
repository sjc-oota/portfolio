class NameController < ApplicationController
  def show
    user = User.first
    render json: { name: user.name }
  end
end
