import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

export const metadata: Metadata = {
  title: 'Blog',
  description: "Shinjiro Echizen's website",
}

// TODO: metadataだけexportが出来ないみたいなのでとりあえず書いている
// これ消せないんか？
export default function Layout({ children }: PropsWithChildren) {
  return children
}
