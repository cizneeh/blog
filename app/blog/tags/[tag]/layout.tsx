import type { Metadata } from 'next'
import type { PropsWithChildren } from 'react'

// TODO: titleを動的に設定
export const metadata: Metadata = {
  title: 'Tag Posts',
  description: "Shinjiro Echizen's website",
}

// TODO: metadataだけexportが出来ないみたいなのでとりあえず書いている
// これ消せないんか？
export default function Layout({ children }: PropsWithChildren) {
  return children
}
