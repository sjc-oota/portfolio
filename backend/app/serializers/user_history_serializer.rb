class UserHistorySerializer < ActiveModel::Serializer
  attributes :project_name, :role, :start_date, :end_date, :description

  def json
    {
      project_name: project_name,
      role: role,
      start_date: start_date,
      end_date: end_date,
      description: description
    }
  end
end