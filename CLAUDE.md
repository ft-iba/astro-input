# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## コマンド

```bash
npm run dev      # 開発サーバー起動 (localhost:4321, --host オプション付き)
npm run build    # 本番ビルド → ./dist/
npm run preview  # ビルド結果のプレビュー
```

## プロジェクト概要

HTML フォームの入力挙動（`enterkeyhint`、`type="file"` など）をブラウザ・デバイス横断でテスト・デモするための Astro 製静的サイト。GitHub Pages（`https://ft-iba.github.io/astro-input/`）にデプロイされる。

## アーキテクチャ

### ルーティング

Astro のファイルベースルーティングを使用。`src/pages/` 配下の各 `index.astro` が 1 ページに対応する。

- `/` → `src/pages/index.astro`（TOC ページ）
- `/enterkeyhint/` → `src/pages/enterkeyhint/index.astro`
- `/form_sample/` → `src/pages/form_sample/index.astro`
- `/type_file/` → `src/pages/type_file/index.astro`

### URL とベースパス

`astro.config.mjs` で `base: 'astro-input'` が設定されているため、内部リンクやアセット参照には `src/constants/index.ts` の `site` 定数を使用する。`import.meta.env.BASE_URL` または Astro 組み込みの `base` 設定を活用すること。

### コンポーネント設計

`src/components/` にある共通コンポーネントはすべて Astro コンポーネント（`.astro`）。React/Vue 等のフレームワークは使用しない。

- `AnchorBaseSelf.astro` / `AnchorBaseBlank.astro` — ナビゲーションリンク（`as` prop で `li` か `p` を選択）
- `InputItemVertical.astro` — フォーム入力の縦並びラッパー（`title` prop + `<slot />`）
- `SvgArrow*.astro` — SVG アイコン単体コンポーネント

### スタイリング

- グローバルスタイルは `src/styles/global.css`（CSS カスタムプロパティ、リセット、ユーティリティクラス）
- コンポーネントスコープの CSS は各 `.astro` ファイルの `<style>` ブロックに記述
- 命名規則は BEM

### TypeScript

`tsconfig.json` は `astro/tsconfigs/strict` を継承。パスエイリアス：

| エイリアス | パス |
|---|---|
| `@assets/*` | `src/assets/*` |
| `@components/*` | `src/components/*` |
| `@constants/*` | `src/constants/*` |
| `@layouts/*` | `src/layouts/*` |
| `@styles/*` | `src/styles/*` |

### ビルド時の定数

`astro.config.mjs` で `import.meta.env.COMMIT_HASH` に git の短縮コミットハッシュを注入している。`src/constants/index.ts` でエクスポートしてキャッシュバスティング等に使用。
