import { Post } from '../../lib/post'

import PostCard from './PostCard'

type Props = {
  posts: Post[]
}

function PostList({ posts }: Props) {
  return (
    <ul>
      {posts.map(post => (
        <PostCard post={post} key={post.slug} />
      ))}
    </ul>
  )
}

export default PostList
