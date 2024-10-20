class SkillSerializer < ActiveModel::Serializer
  attributes :skill_type, name

  def json
    {
      skill_type: skill_type,
      name: name
    }
  end
end