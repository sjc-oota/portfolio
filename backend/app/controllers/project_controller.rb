class ProjectController < ApplicationController
  def list
    projects = Project.all
    render json: { projects: projects }
  end
end
