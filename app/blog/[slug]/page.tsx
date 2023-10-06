import PostContent from '../../../components/post/PostContent'
import { getAllPostSlugs, getPostBySlug, Post, markdownToHtml } from '../../../lib/post'

type Params = {
  slug: string
}

export default async function PostPage({ params }: { params: Params }) {
  const post = await getPost(params)

  return <PostContent post={post} />
}

// TODO: 型をいい感じにつけたい
const getPost = async (params: Params): Promise<Post> => {
  const post = getPostBySlug(params.slug)
  post.content = await markdownToHtml(post.content)
  return post
}

// TODO: getStaticPropsは GetStaticPropsという型があったがgStaticParamsにはない？
// 全ての記事のslugを取得する
export const generateStaticParams = (): Params[] => getAllPostSlugs().map((slug) => ({ slug }))
