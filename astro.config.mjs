import { defineConfig } from 'astro/config';

export default defineConfig({
  // ユーザーサイト（<username>.github.io）はルート配信なので base は不要。
  // 独自ドメインへ移行するときはこの site を差し替えるだけでよい。
  site: 'https://yoshitaku-jp.github.io',
});
