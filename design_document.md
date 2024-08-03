# 設計

## 概要

本ドキュメントは令和6年度の目標となるポートフォリオ作成に関する設計書になります。
記載内容は詳細設計に準ずるものになります。

## 画面イメージ

画像の貼り付けがmarkdownでは難しかったので今回は除外します。

## DB設計

Rails-Reactを使用してのポートフォリオとするため、ユーザー情報はDBに格納して参照する方式とします。
以下、必要になる想定のテーブルになります。

- ユーザー情報（ `users`）

  |論理名|物理名|型     |Null|備考|
  |-----|------|-------|-----|---|
  |ID   |id    |integer|false||
  |名前  |name  |string |true||


- 業務経歴（`user_histories`）

  |論理名      |物理名       |型     |Null|備考|
  |-----------|-------------|-------|-----|---|
  |ID         |id           |integer|false||
  |プロジェクト名|project_name|string|false||
  |役割        |role         |string|false||
  |開始年月日  |start_date   |date   |false||
  |終了年月日  |end_date     |date   |true ||
  |使用技術    |technologies |string|false||
  |業務内容    |content      |string|false||


- スキル（ `skills` ）

  |論理名      |物理名    |型     |Null|備考|
  |-----------|----------|-------|-----|---|
  |ID         |id        |integer|false||
  |ユーザーID  |user_id   |string |true||
  |スキルタイプ|skill_type|string |false|資格 or その他|
  |スキル名    |name      |string |false||

- 成果物（ `projects` ）

  |論理名         |物理名       |型     |Null|備考|
  |--------------|-------------|-------|-----|---|
  |ID            |id           |integer|false||
  |成果物名      |name         |string |false||
  |説明          |description  |string |false||
  |リンク        |link         |string |true ||
  |スクリーンショット|screenshot  |string |true ||