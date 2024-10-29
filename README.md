# プロジェクト名

令和6年度の目標となるポートフォリオの作成

## インストール

インストール手順をここに記載します。

```bash
# クローンリポジトリ
git clone https://github.com/sjc-oota/portfolio.git

# ディレクトリに移動
cd repository

```

### 使用方法

起動の仕方を記載します。

1. クローンしてきたリポジトリのディレクトリに移動します
1. 対象のディレクトリで docker を起動します
    ```bash
      docker compose up
    ```
1. DBを作成する
    ```bash
      docker compose exec app rake db:create
    ```
1. シードデータを挿入します
    ```bash
      docker compose exec app rake db:seed
    ```

