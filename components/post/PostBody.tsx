import styles from './PostBody.module.css'

type Props = {
  content: string
}

function PostBody({ content }: Props) {
  return (
    <div
      className={styles.body}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  )
}

export default PostBody
