# yoshitaku-jp.github.io

吉村健矢（YOSHIMURA Takuya）のポートフォリオサイト。Astro 製の静的サイト。

- 日本語: `/`
- English: `/en/`

デザイン規約・実装ルールは **[AGENTS.md](./AGENTS.md)** にまとめてある。
見た目に関わる変更をする前に必ず読むこと。

## セットアップ

```bash
npm install
npm run dev      # http://localhost:4321
```

`localhost` がブラウザ拡張等でブロックされる場合は、IP を明示して起動する。

```bash
npx astro dev --host 127.0.0.1 --port 4321
```

## コマンド

| コマンド | 内容 |
| --- | --- |
| `npm run dev` | 開発サーバーを起動 |
| `npm run build` | 型チェック（`astro check`）＋ 静的ビルド（`dist/`） |
| `npm run preview` | ビルド結果をローカルで確認 |

## 構成

```
src/
├── data/content.ts            日本語・英語の文言をすべて集約
├── components/
│   ├── Portfolio.astro        ページ本体（lang を受け取って描画）
│   └── Analytics.astro
├── layouts/BaseLayout.astro   <head>・デザイントークン・全体スタイル・言語切替
└── pages/
    ├── index.astro            日本語ページ
    └── en/index.astro         英語ページ
```

文言を足すときは `src/data/content.ts` の `ja` / `en` **両方**を埋める。
コンポーネントに文字列を直接書かない。

## 環境変数

`.env.example` を `.env` にコピーして設定する（アクセス解析用）。
