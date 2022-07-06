import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypeHighlight from 'rehype-highlight'
import rehypeStringify from 'rehype-stringify'

const postsPath = path.join(process.cwd(), 'posts')

export type Post = {
  title: string
  slug: string
  date: string
  tags: string[]
  content: string
}

export function getAllPostSlugs() {
  return fs.readdirSync(postsPath).map(slug => slug.replace(/\.md$/, ''))
}

// TODO: Sort by date
export function getAllPosts(): Post[] {
  const slugs = getAllPostSlugs()
  return getAllPostSlugs().map(slug => getPostBySlug(slug))
}

// TODO: Modify the function so it only gets specified data, we don't need the post content for blog top page
export function getPostBySlug(slug: string): Post {
  const fileContent = fs.readFileSync(path.join(postsPath, slug + '.md'), 'utf8')
  const matterResult = matter(fileContent)
  const {
    data: { title, date, tags },
    content,
  } = matterResult

  return {
    title,
    slug,
    date,
    tags,
    content,
  }
}

export function getPostsByTag(tag: string): Post[] {
  const posts = getAllPosts()

  return posts.filter(post => post.tags.includes(tag))
}

export async function markdownToHtml(markdown: string) {
  const content = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown)
  return content.toString()
}
