import { defineConfigWithTheme } from 'vitepress'
import fixKatex from './fix-katex'
import { buildRss } from './rss'
export interface ThemeConfig {
  name?: string,
  cover?: string,
  hello?: string,
  motto?: string,
  social?: { icon: string, url: string }[],
  waline?: string,
}
const rawBase = '/'
const base = rawBase == '/' ? '' : rawBase
export default defineConfigWithTheme<ThemeConfig>({
  lang: 'zh-CN',
  title: "樱花乱飘的幻境",
  base: rawBase,
  lastUpdated: false, // 禁用 Git 的 lastUpdated
  // from https://codybontecou.com/tailwindcss-with-vitepress.html
  head: [
    // favicon
    ['link', { rel: 'icon', href: base + '/favicon.svg' }],
    // 字体支持
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0/css/regular.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.0.0/css/all.min.css' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Serif+SC' }],
    // waline
    ['script', { src: 'https://cdn.jsdelivr.net/npm/@waline/client@1.5.4/dist/Waline.min.js' }],
    // katex
    ['script', { src: 'https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.js' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/contrib/auto-render.min.js' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/katex@0.15.2/dist/katex.min.css' }],
  ],
  markdown: {
    theme: 'github-light',
    lineNumbers: true,
    config: md => {
      md.use(fixKatex)
    }
  },
  themeConfig: {
    name: 'Ying Luan',
    cover: base + '/60651947_p0.jpg',
    hello: '你好，樱花乱飘',
    motto: '不要因为走得太远，而忘记我们为什么出发',
    social: [
      { icon: 'fa-github', url: 'https://github.com/Ying-Luan' },
      { icon: 'fa-twitter', url: 'https://twitter.com' },
      { icon: 'fas fa-envelope', url: 'mailto:3433800035@qq.com' },
    ],
    waline: 'https://blog-waline-e7jqcxb9s-flaribbit.vercel.app/',
  },
  sitemap: {
    hostname: 'https://ying-luan.github.io',
  },
  async buildEnd(config) {
    await buildRss(config)
  },
})
