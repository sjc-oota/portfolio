# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

# ダミーデータを作成する
User.create(name: '南極　ぺんぎん')

#ダミーデータ（業務経歴リスト）
UserHistory.create(project_name: 'バレンタインお菓子作り', role: 'お菓子製作者', start_date: '2020-02-08', end_date: '2020-02-14', content: 'バレンタインデーに向けてチョコレートを使ったお菓子を作りました。')
UserHistory.create(project_name: 'スコーンづくり', role: 'スコーン初心者', start_date: '2020-06-12', end_date: '2020-06-12', content: 'ホテル〇－クラのレシピを使ってのスコーン作り。')
UserHistory.create(project_name: 'タルトタタンへの挑戦', role: 'リンゴのお菓子作り初心者', start_date: '2020-10-21', end_date: '2020-10-21', content: 'タルトタタンを作りました。')
UserHistory.create(project_name: 'メレンゲクッキー作り', role: 'クッキー製作者', start_date: '2024-08-11', end_date: '2021-08-11', content: '残った卵白でメレンゲクッキーを作りました。')

# ダミーデータ（スキルリスト）
Skill.create(skill_type: 'お菓子作り', name: 'マフィン')
Skill.create(skill_type: 'お菓子作り', name: 'クッキー')
Skill.create(skill_type: 'お菓子作り', name: 'パウンドケーキ')
Skill.create(skill_type: 'お菓子作り', name: 'スコーン')
Skill.create(skill_type: 'お菓子作り', name: 'プリン')
Skill.create(skill_type: 'お菓子作り', name: 'タルトタタン')

# ダミーデータ（成果物リスト）
Project.create(project_name: 'バレンタインのお菓子作り', content: 'マフィン（くるみ）、マフィン（レモンピール）、バタークッキー（くるみ）、クッキー（紅茶）、ココアクッキー（アーモンド）、ガトーショコラ、ガナッシュのタルト、カスタードのタルト')
Project.create(project_name: 'スコーンづくり', content: 'スコーン')
Project.create(project_name: 'タルトタタンへの挑戦', content: 'タルトタタン')
Project.create(project_name: 'メレンゲクッキー作り', content: 'メレンゲクッキー')
