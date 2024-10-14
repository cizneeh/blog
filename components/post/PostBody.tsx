import styles from './PostBody.module.css'

type Props = {
  content: string
}

function PostBody({ content }: Props) {
  return (
    <div
      className={styles.body}
      // biome-ignore lint: a
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default PostBody
