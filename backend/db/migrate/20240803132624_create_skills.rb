class CreateSkills < ActiveRecord::Migration[7.1]
  def change
    create_table :skills do |t|
      t.string :skill_type
      t.string :name

      t.timestamps
    end
  end
end
