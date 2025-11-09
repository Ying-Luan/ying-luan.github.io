import { createContentLoader } from 'vitepress'
import { Feed } from 'feed'
import fs from 'fs'
import { resolve } from 'path'

const siteConfig = {
  hostname: 'https://ying-luan.github.io/',
  title: '樱花乱飘的幻境',
  description: '樱花乱飘的个人博客',
  authorName: 'Ying Luan',
  contentPath: 'posts/*.md',
}

/**
 * 生成 RSS 文件
 * @param {object} config - VitePress 配置对象
 */
export async function buildRss(config) {
  const posts = await createContentLoader(siteConfig.contentPath, {
    excerpt: true,
    render: true,
    transform(rawPosts) {
      rawPosts.sort((a, b) => new Date(b.frontmatter.date).getTime() - new Date(a.frontmatter.date).getTime())
      return rawPosts
    }
  }).load()

  const feed = new Feed({
    title: siteConfig.title,
    description: siteConfig.description,
    id: siteConfig.hostname,
    link: siteConfig.hostname,
    language: 'zh-CN',
    copyright: `Copyright (c) ${new Date().getFullYear()} ${siteConfig.authorName}`,
    author: {
      name: siteConfig.authorName,
      link: siteConfig.hostname
    },
  })

  posts.forEach(post => {
    const url = siteConfig.hostname + post.url.replace(/^\/|\/$/g, '')

    feed.addItem({
      title: post.frontmatter.title,
      id: url,
      link: url,
      description: post.excerpt,
      content: post.html,
      date: new Date(post.frontmatter.date),
      author: [{ name: siteConfig.authorName, link: siteConfig.hostname }]
    })
  })

  const outDir = config.outDir || resolve(process.cwd(), '.vitepress/dist')
  fs.writeFileSync(resolve(outDir, 'rss.xml'), feed.rss2())
}