import { Work } from '../pages/works'

const dummy: Work = {
  id: 'dummy',
  title: '何か作ったもの',
  techStack: ['何か', 'すごい', '技術'],
  url: 'https://cizneeh.me/',
  category: '何かカテゴリー',
  description: [
    'このウェブサイトです。フロントエンド開発の勉強も兼ねて、Next.js + TypeScriptで作りました。',
    'ブログの記事データはCMSは使わず、Markdownファイルで管理しています。GitHubのリポジトリに記事データをpushするとビルドが走るようになっています。',
  ],
  date: '2022-07-06',
  githubUrl: 'https://github.com/cizneeh/blog',
  thumbnailUrl: 'images/works/dummy.jpg',
}

export default dummy
