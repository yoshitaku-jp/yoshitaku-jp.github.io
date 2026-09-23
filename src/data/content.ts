export type Locale = 'ja' | 'en';

interface Content {
  profile: {
    /** 主表記。日本語ページでは和名、英語ページではラテン表記を主にする。 */
    name: string;
    /** 副表記。主表記のもう一方を添える。 */
    nameSub: string;
    role: string;
    summary: string;
  };
  links: { label: string; href: string; note: string }[];
  career: { period: string; company: string; role: string; description: string }[];
  skills: { category: string; items: string[] }[];
  /** 取得年月の新しい順に並べる */
  certifications: { earned: string; name: string }[];
  headings: { career: string; skills: string; certifications: string; links: string };
  privacy: {
    title: string;
    /** フッターのリンク文言 */
    linkLabel: string;
    backLabel: string;
    /** 「当サイト」が何を指すかの定義 */
    scope: string;
    analytics: {
      heading: string;
      paragraphs: string[];
      /** Google のポリシーへのリンクの直前に置く一文 */
      policyLead: string;
      policyLink: { label: string; href: string };
    };
    revision: { heading: string; paragraph: string };
    enacted: string;
  };
}

export const content: Record<Locale, Content> = {
  ja: {
    profile: {
      name: 'YOSHIMURA Takuya',
      nameSub: 'yoshitaku-jp',
      role: 'アナリティクスエンジニア / データエンジニア',
      summary:
        'データ基盤の設計・構築と、ETL / ELT パイプラインの運用を主な仕事にしています。データが「使える状態」で届くまでの流れを整えることに関心があります。',
    },
    headings: { career: '経歴', skills: '技術', certifications: '資格', links: 'リンク' },
    links: [
      { label: 'GitHub', href: 'https://github.com/yoshitaku-jp', note: 'コードと個人プロジェクト' },
      { label: 'Blog', href: 'https://yoshitaku-jp.hatenablog.com/', note: '技術記事（はてなブログ）' },
      { label: 'Prairie Card', href: 'https://my.prairie.cards/u/yoshitaku_jp', note: 'プロフィールカード' },
      { label: 'X', href: 'https://twitter.com/yoshitaku_jp', note: '日々のつぶやき' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/takuya-yoshimura-615bbaab/', note: '職歴・実績' },
      {
        label: 'YOUTRUST',
        href: 'https://youtrust.jp/users/53b393d667831153073b533a97b608c2',
        note: 'キャリア・つながり',
      },
    ],
    career: [
      {
        period: '2026.09 — 現在',
        company: '株式会社カオナビ',
        role: 'アナリティクスエンジニア',
        description: 'Snowflake と AWS を用いたデータ基盤の構築・運用と、データ利活用の推進。',
      },
      {
        period: '2022.09 — 2026.08',
        company: '株式会社MIXI',
        role: 'データエンジニア',
        description:
          'ゲームアプリ向けデータ分析基盤の新規構築、および複数プロダクト（最大7基盤）の運用保守。BigQuery / Dataform / Terraform による ETL パイプライン開発と CI/CD 整備。',
      },
      {
        period: '2014.07 — 2022.08',
        company: '株式会社ジール',
        role: 'データエンジニア / プリセールス / システムエンジニア',
        description:
          'Azure（Data Factory, Synapse Analytics 等）を用いたデータ分析基盤の構築・運用と、Azure 導入検討企業向け PoC・セミナー講師。前職では業務システムの開発・保守にも従事。',
      },
    ],
    skills: [
      { category: '言語', items: ['SQL', 'Python'] },
      {
        category: 'データ分析基盤',
        items: ['Snowflake', 'BigQuery', 'Looker'],
      },
      { category: 'クラウド', items: ['AWS', 'GCP'] },
      { category: '開発・運用', items: ['Terraform', 'GitHub Actions', 'Docker'] },
    ],
    certifications: [
      { earned: '2021.03', name: 'DP-201: Designing an Azure Data Solution' },
      { earned: '2021.03', name: 'DP-200: Implementing an Azure Data Solution' },
      { earned: '2015.11', name: '基本情報技術者試験' },
    ],
    privacy: {
      title: 'プライバシーポリシー',
      linkLabel: 'プライバシーポリシー',
      backLabel: 'トップへ戻る',
      scope:
        '本ポリシーにおける「当サイト」とは、YOSHIMURA Takuya のポートフォリオサイト（https://yoshitaku-jp.github.io/）を指します。',
      analytics: {
        heading: 'アクセス解析ツールについて',
        paragraphs: [
          '当サイトでは、アクセス状況を把握するために、Google が提供するアクセス解析ツール「Google アナリティクス」を利用しています。',
          'Google アナリティクスはデータの収集に Cookie を使用しています。収集されるデータは匿名であり、個人を特定するものではありません。',
          'この収集は、ブラウザの設定で Cookie を無効にすることで拒否できます。設定方法は、お使いのブラウザのヘルプをご確認ください。',
        ],
        policyLead: 'Google によるデータの取り扱いについては、以下をご覧ください。',
        policyLink: {
          label: 'Google のサービスを使用するサイトやアプリから収集した情報の Google による使用',
          href: 'https://policies.google.com/technologies/partner-sites?hl=ja',
        },
      },
      revision: {
        heading: '本ポリシーの変更',
        paragraph: '本ポリシーの内容は、必要に応じて変更することがあります。変更後の内容は本ページに掲載します。',
      },
      enacted: '制定日：2026年9月23日',
    },
  },
  en: {
    profile: {
      name: 'YOSHIMURA Takuya',
      nameSub: 'yoshitaku-jp',
      role: 'Analytics Engineer / Data Engineer',
      summary:
        'I design and build data platforms, and operate ETL / ELT pipelines. I care about making data reliably available in a usable state.',
    },
    headings: { career: 'Career', skills: 'Skills', certifications: 'Certifications', links: 'Links' },
    links: [
      { label: 'GitHub', href: 'https://github.com/yoshitaku-jp', note: 'Code & side projects' },
      { label: 'Blog', href: 'https://yoshitaku-jp.hatenablog.com/', note: 'Technical articles (in Japanese)' },
      { label: 'Prairie Card', href: 'https://my.prairie.cards/u/yoshitaku_jp', note: 'Profile card' },
      { label: 'X', href: 'https://twitter.com/yoshitaku_jp', note: 'Day-to-day thoughts' },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/takuya-yoshimura-615bbaab/', note: 'Career history' },
      {
        label: 'YOUTRUST',
        href: 'https://youtrust.jp/users/53b393d667831153073b533a97b608c2',
        note: 'Career & network',
      },
    ],
    career: [
      {
        period: '2026.09 — Present',
        // 公式の会社概要に「英文 kaonavi, inc.」と明記（inc. は小文字）
        company: 'kaonavi, inc.',
        role: 'Analytics Engineer',
        description:
          'Building and operating data platforms with Snowflake and AWS, and driving wider use of data across the organization.',
      },
      {
        period: '2022.09 — 2026.08',
        company: 'MIXI, Inc.',
        role: 'Data Engineer',
        description:
          'Built a new data analytics platform for game apps and maintained multiple product platforms (up to 7 at once). Developed ETL pipelines and CI/CD with BigQuery, Dataform, and Terraform.',
      },
      {
        period: '2014.07 — 2022.08',
        // 公式表記は "Corporation"（公式サイトのフッター表記・LinkedIn の英文名に準拠）
        company: 'ZEAL Corporation',
        role: 'Data Engineer / Pre-Sales / Systems Engineer',
        description:
          'Built and operated data analytics platforms on Azure (Data Factory, Synapse Analytics, etc.), and ran PoCs and seminars for prospective Azure customers. Earlier in my career, developed and maintained business systems.',
      },
    ],
    skills: [
      { category: 'Languages', items: ['SQL', 'Python'] },
      {
        category: 'Data Platform',
        items: ['Snowflake', 'BigQuery', 'Looker'],
      },
      { category: 'Cloud', items: ['AWS', 'GCP'] },
      { category: 'Dev & Ops', items: ['Terraform', 'GitHub Actions', 'Docker'] },
    ],
    certifications: [
      { earned: '2021.03', name: 'DP-201: Designing an Azure Data Solution' },
      { earned: '2021.03', name: 'DP-200: Implementing an Azure Data Solution' },
      {
        earned: '2015.11',
        // 海外の読み手には通じないため、日本の国家資格であることを明示する
        name: 'Fundamental Information Technology Engineer Examination (FE) — a Japanese national IT qualification',
      },
    ],
    privacy: {
      title: 'Privacy Policy',
      linkLabel: 'Privacy Policy',
      backLabel: 'Back to top',
      scope:
        'In this policy, "this site" refers to the portfolio site of YOSHIMURA Takuya (https://yoshitaku-jp.github.io/).',
      analytics: {
        heading: 'Analytics',
        paragraphs: [
          'This site uses Google Analytics, an analytics service provided by Google, to understand how visitors use the site.',
          'Google Analytics uses cookies to collect data. The data is collected anonymously and does not identify you personally.',
          'You can opt out of this collection by disabling cookies in your browser settings. Please refer to your browser’s help for instructions.',
        ],
        policyLead: 'For details on how Google handles this data, see:',
        policyLink: {
          label: 'How Google uses information from sites or apps that use our services',
          href: 'https://policies.google.com/technologies/partner-sites?hl=en',
        },
      },
      revision: {
        heading: 'Changes to This Policy',
        paragraph: 'This policy may be updated as needed. Any changes will be posted on this page.',
      },
      enacted: 'Effective: September 23, 2026',
    },
  },
};

/*
 * 日本語側だけ追記して英語側を忘れる事故が起きやすいので、件数を突き合わせる。
 * このファイルが読み込まれた時点で走るため、dev サーバー起動時とビルド時に必ず検査される。
 */
for (const key of ['links', 'career', 'skills', 'certifications'] as const) {
  const ja = content.ja[key].length;
  const en = content.en[key].length;
  if (ja !== en) {
    throw new Error(
      `content.ts: ${key} の件数が ja=${ja} と en=${en} で一致しません。両方の言語を埋めてください。`
    );
  }
}
