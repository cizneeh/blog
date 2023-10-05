import Link from 'next/link'

import { Post } from '../../lib/post'
import DateFormatter from '../utils/DateFormatter'

import styles from './PostCard.module.css'

type Props = {
  post: Post
}

// TODO: 各記事をカードっぽくして、グリッド表示にしたい
function PostCard({ post: { title, tags, date, slug, content } }: Props) {
  const croppedContent = cropContent(content)

  return (
    <li className={styles.card}>
      <h2 className={styles.title}>
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h2>
      <DateFormatter dateString={date} />
      <ul className={styles.tags}>
        {tags.map(tag => (
          <li key={tag}>
            <Link href={`/blog/tags/${tag}`}>{`#${tag}`}</Link>
          </li>
        ))}
      </ul>
      <p>{croppedContent}</p>
    </li>
  )
}

export default PostCard

const cropLimit = 130

// 記事リストに表示する内容部分を切り取る
// 初めのheadingに到達するか、一定文字数に達するまで
function cropContent(markdownStr: string) {
  const markdownIndex = markdownStr.indexOf('#')
  return markdownStr.substring(0, Math.min(markdownIndex, cropLimit)) + '...'
}
