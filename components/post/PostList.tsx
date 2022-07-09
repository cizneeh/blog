import { Post } from '../lib/post'
import PostCard from './PostCard'

const cropLimit = 130

type Props = {
  posts: Post[]
}

function PostList({ posts }: Props) {
  return (
    <ul>
      {posts.map(({ title, date, slug, content }) => (
        <PostCard
          key={slug}
          title={title}
          date={date}
          slug={slug}
          croppedContent={cropContent(content)}
        />
      ))}
    </ul>
  )
}

export default PostList

// 記事リストに表示する内容部分を切り取る
// 初めのheadingに到達するか、一定文字数に達するまで
function cropContent(markdownStr: string) {
  // TODO: もっと良い方法がある気がする
  const markdownIndex = markdownStr.indexOf('#')
  return markdownStr.substring(0, Math.min(markdownIndex, cropLimit)) + '...'
}
