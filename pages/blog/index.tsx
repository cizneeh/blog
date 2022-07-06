import { GetStaticProps } from 'next'
import Link from 'next/link'
import { listenerCount } from 'process'
import PostList from '../../components/PostList'
import { Post, getAllPosts } from '../../lib/post'

type Props = {
  posts: Post[]
}

function BlogPage({ posts }: Props) {
  return (
    <>
      <PostList posts={posts} />
    </>
  )
}

export default BlogPage

export const getStaticProps: GetStaticProps = () => {
  const posts = getAllPosts()

  return {
    props: {
      posts,
    },
  }
}
