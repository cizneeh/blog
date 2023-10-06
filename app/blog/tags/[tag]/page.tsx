import PostList from '../../../../components/post/PostList'
import { getAllPosts, getPostsByTag } from '../../../../lib/post'

type Params = {
  tag: string
}

export default function TagPostPage({ params: { tag } }: { params: Params }) {
  // TODO: 何故かURLエンコードされた状態でtagが渡ってくる
  const decodedTag = decodeURI(tag)
  const posts = getPostsByTag(decodedTag)
  return (
    <>
      <h1>Tag: {decodedTag}</h1>
      <PostList posts={posts} />
    </>
  )
}

export const generateStaticParams = () => {
  // 全てのpostsのタグを取得してから、重複を除去
  const tagsWithDuplicate = getAllPosts().flatMap((post) => post.tags)
  const tags = Array.from(new Set(tagsWithDuplicate))
  console.log(tags)

  return tags.map((tag) => ({ tag }))
}
