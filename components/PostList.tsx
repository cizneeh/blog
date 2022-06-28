import { Post } from '../lib/post'
import PostCard from './PostCard'

type Props = {
  posts: Post[]
}

function PostList({ posts }: Props) {
  return (
    <ul>
      {posts.map(({ title, date, slug }) => (
        <PostCard key={slug} title={title} date={date} slug={slug} />
      ))}
    </ul>
  )
}

export default PostList
