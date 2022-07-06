import Link from 'next/link'
import DateFormatter from './DateFormatter'

type Props = {
  title: string
  date: string
  slug: string
  croppedContent: string
}

// TODO: make thie whole card clickable instead of title only
function PostCard({ title, date, slug, croppedContent }: Props) {
  return (
    <li>
      <h2>
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h2>
      <DateFormatter dateString={date} />
      <p>{croppedContent}</p>
    </li>
  )
}

export default PostCard
