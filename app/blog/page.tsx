import PostList from '../../components/post/PostList'
import { type Post, getAllPosts } from '../../lib/post'

type Props = {
  posts: Post[]
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <PostList posts={posts} />
    </>
  )
}
