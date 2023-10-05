import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import remarkPrism from 'remark-prism'

const postsPath = path.join(process.cwd(), 'posts')

export type Post = {
  title: string
  slug: string
  date: string
  tags: string[]
  content: string
}

export const getAllPostSlugs = () => fs.readdirSync(postsPath).map((slug) => slug.replace(/\.md$/, ''))

// TODO: sort by date
export const getAllPosts = (): Post[] => getAllPostSlugs().map((slug) => getPostBySlug(slug))

// TODO: 指定したデータだけ取得する
export const getPostBySlug = (slug: string): Post => {
  const fileContent = fs.readFileSync(path.join(postsPath, slug + '.md'), 'utf8')
  const {
    data: { title, date, tags },
    content,
  } = matter(fileContent)

  return {
    title,
    slug,
    date,
    tags,
    content,
  }
}

export const getPostsByTag = (tag: string): Post[] => getAllPosts().filter((post) => post.tags.includes(tag))

// TODO: コードブロックのファイル名表示とハイライト
// TODO: マークダウン扱うのにもっと良い方法ないかな
export async function markdownToHtml(markdown: string) {
  const content = await remark()
    .use(html, { sanitize: false })
    // TODO: app routerにしたらENOENTと言われる, page routerだと動く
    // .use(remarkPrism, { plugins: [] })
    .process(markdown)
  return content.toString()
}
