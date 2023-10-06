import PostList from '../../components/post/PostList'
import { Post, getAllPosts } from '../../lib/post'

type Props = {
  posts: Post[]
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <>
      <h1>ブログ記事</h1>
      <PostList posts={posts} />
    </>
  )
}
