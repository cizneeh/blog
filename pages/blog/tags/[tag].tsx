import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '../../../components/layout/Layout'
import PostList from '../../../components/post/PostList'
import { getAllPosts, getPostsByTag, Post } from '../../../lib/post'

type Props = {
  tag: string
  posts: Post[]
}

function TagPostPage({ tag, posts }: Props) {
  return (
    <Layout title={tag}>
      <h1>Tag: {tag}</h1>
      <PostList posts={posts} />
    </Layout>
  )
}

export default TagPostPage

type Params = {
  tag: string
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const tag = params!.tag
  const posts = getPostsByTag(tag)

  return {
    props: { tag, posts },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts()

  const tagsTmp: string[] = []

  for (const post of posts) {
    tagsTmp.push(...post.tags)
  }

  const tags = Array.from(new Set(tagsTmp))

  const paths = tags.map(tag => ({ params: { tag } }))

  return {
    paths,
    fallback: false,
  }
}
