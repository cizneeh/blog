type Props = {
  content: string
}

function PostBody({ content }: Props) {
  return <div dangerouslySetInnerHTML={{ __html: content }}></div>
}

export default PostBody
