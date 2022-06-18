import { GetStaticProps } from 'next'
import Link from 'next/link'
import { listenerCount } from 'process'
import { Post, getAllPosts } from '../../lib/posts'

type Props = {
  posts: Post[]
}

function BlogPage({ posts }: Props) {
  return (
    <div>
      <ul>
        {posts.map(({ title, date, slug }) => (
          <li key={slug}>
            <Link href={`/blog/${slug}`}>{title}</Link>
            <time>{date}</time>
          </li>
        ))}
      </ul>
    </div>
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
