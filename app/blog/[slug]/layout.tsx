import { Metadata } from 'next'
import { PropsWithChildren } from 'react'

// TOOD: titleを動的に設定
export const metadata: Metadata = {
  title: 'Blog Post',
  description: "Shinjiro Echizen's website",
}

// TODO: metadataだけexportが出来ないみたいなのでとりあえず書いている
// これ消せないんか？
export default function Layout({ children }: PropsWithChildren) {
  return children
}
