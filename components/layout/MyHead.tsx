import Head from 'next/head'

type Props = {
  title?: string
}

// TODO: app routerへの移行が完了したら消す
function MyHead({ title }: Props) {
  const description = `Shinjiro Echizen's website/blog`
  const url = 'https://cizneeh.me'
  const siteName = 'Shinjiro Echizen website'
  const twitterId = 'cizneeh'
  const siteTitle = title ? `${title} | Echizen` : siteName

  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />
      <meta name="description" content={description} />
      {/* TODO: OGP, Twitter対応 */}
      <title>{siteTitle}</title>
    </Head>
  )
}

export default MyHead
