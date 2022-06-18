import Link from 'next/link'

type Props = {
  title: string
  date: string
  slug: string
}

// TODO: make thie whole card clickable instead of title only
function PostCard({ title, date, slug }: Props) {
  return (
    <li>
      <Link href={`/blog/${slug}`}>{title}</Link>
      <time>{date}</time>
    </li>
  )
}

export default PostCard
