class SkillController < ApplicationController
  def list
    skills = Skill.all
    render json: { skills: skills }
  end
end
