import Link from 'next/link'
import DateFormatter from './DateFormatter'
import styles from './PostHeader.module.css'

type Props = {
  title: string
  date: string
  tags: string[]
}

function PostHeader({ title, date, tags }: Props) {
  return (
    <header className={styles.post_header}>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.date}>
        <DateFormatter dateString={date} />
      </div>
      <ul className={styles.tags}>
        {tags.map(tag => (
          <li key={tag}>
            <Link href={`/blog/tags/${tag}`}>{`#${tag}`}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
}

export default PostHeader
