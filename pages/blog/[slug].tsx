import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import PostBody from '../../components/post/PostBody'
import PostContent from '../../components/post/PostContent'
import PostHeader from '../../components/post/PostHeader'
import { getAllPostSlugs, getPostBySlug, Post, markdownToHtml } from '../../lib/post'

type Props = {
  post: Post
}

function PostPage({ post }: Props) {
  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* TODO: OGP(いや要らないか) */}
      </Head>
      <PostContent post={post} />
    </>
  )
}

export default PostPage

type Params = {
  slug: string
}

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
  const post = getPostBySlug(params!.slug)
  post.content = await markdownToHtml(post.content)

  return {
    props: { post },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const slugs = getAllPostSlugs()

  const paths = slugs.map(slug => ({ params: { slug } }))

  return {
    paths,
    fallback: false,
  }
}
