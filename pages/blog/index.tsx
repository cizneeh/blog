import { GetStaticProps } from 'next'

import Layout from '../../app/layout/Layout'
import PostList from '../../components/post/PostList'
import { Post, getAllPosts } from '../../lib/post'

type Props = {
  posts: Post[]
}

function BlogPage({ posts }: Props) {
  return (
    <Layout title="Blog">
      <h1>ブログ記事</h1>
      <PostList posts={posts} />
    </Layout>
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
