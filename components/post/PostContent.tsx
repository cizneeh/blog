import Link from 'next/link'

import type { Post } from '../../lib/post'
import PostBody from './PostBody'
import styles from './PostContent.module.css'
import PostHeader from './PostHeader'

type Props = {
  post: Post
}

function PostContent({ post: { content, date, tags, title } }: Props) {
  return (
    <article className={styles.post}>
      <PostHeader title={title} date={date} tags={tags} />
      <PostBody content={content} />
    </article>
  )
}

export default PostContent
