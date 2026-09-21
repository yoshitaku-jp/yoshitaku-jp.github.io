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
  headings: { career: string; skills: string; links: string };
}

export const content: Record<Locale, Content> = {
  ja: {
    profile: {
      name: 'YOSHIMURA Takuya',
      nameSub: '吉村 健矢',
      role: 'データエンジニア',
      summary:
        'データ基盤の設計・構築と、ETL / ELT パイプラインの運用を主な仕事にしています。データが「使える状態」で届くまでの流れを整えることに関心があります。',
    },
    headings: { career: '経歴', skills: '技術', links: 'リンク' },
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
        period: '2022.09 — 現在',
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
      { category: '言語', items: ['SQL', 'Python', 'Ruby'] },
      {
        category: 'データ分析基盤',
        items: ['BigQuery', 'Dataform', 'dbt', 'Looker', 'Amazon EMR', 'AWS Glue'],
      },
      { category: 'クラウド', items: ['GCP', 'AWS', 'Azure'] },
      { category: '開発・運用', items: ['Terraform', 'GitHub Actions', 'Docker'] },
    ],
  },
  en: {
    profile: {
      name: 'YOSHIMURA Takuya',
      nameSub: '吉村 健矢',
      role: 'Data Engineer',
      summary:
        'I design and build data platforms, and operate ETL / ELT pipelines. I care about making data reliably available in a usable state.',
    },
    headings: { career: 'Career', skills: 'Skills', links: 'Links' },
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
        period: '2022.09 — Present',
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
      { category: 'Languages', items: ['SQL', 'Python', 'Ruby'] },
      {
        category: 'Data Platform',
        items: ['BigQuery', 'Dataform', 'dbt', 'Looker', 'Amazon EMR', 'AWS Glue'],
      },
      { category: 'Cloud', items: ['GCP', 'AWS', 'Azure'] },
      { category: 'Dev & Ops', items: ['Terraform', 'GitHub Actions', 'Docker'] },
    ],
  },
};
