class CreateUserHistories < ActiveRecord::Migration[7.1]
  def change
    create_table :user_histories do |t|
      t.string :project_name
      t.string :role
      t.date :start_date
      t.date :end_date
      t.string :technologies
      t.string :content

      t.timestamps
    end
  end
end
