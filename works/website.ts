import type { Work } from '../app/works/page'

const website: Work = {
  id: 'website',
  title: 'このブログ',
  techStack: ['TypeScript', 'Next.js', 'CSS Modules'],
  category: 'ウェブサイト',
  url: 'https://cizneeh.me/',
  description: [
    'このウェブサイトです。フロントエンド開発の勉強も兼ねて、Next.js + TypeScriptで作りました。',
    'ブログの記事データはCMSは使わず、Markdownファイルで管理しています。GitHubのリポジトリに記事データをpushするとビルドが走るようになっています。',
  ],
  date: '2022-05-23',
  githubUrl: 'https://github.com/cizneeh/blog',
}

export default website
