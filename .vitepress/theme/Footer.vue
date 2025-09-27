<template>
  <footer class="site-footer">
    <div class="inner">
      <div class="up">
        <span>© {{ year }} {{ site.value.title }}. All Rights Reserved.</span>
        <span class="sep">/</span>
        <a :href="withBase('/rss.xml')">RSS</a>
        <span class="sep">/</span>
        <a :href="withBase('/sitemap.xml')">Sitemap</a>
      </div>
      <div class="down">
        <span>Powered by
          <a href="https://vitepress.dev/" target="_blank" rel="noopener noreferrer">VitePress</a>
          &amp;
          <a href="https://github.com/flaribbit/vitepress-theme-sakura" target="_blank" rel="noopener noreferrer">vitepress-theme-sakura</a>
        </span>
        <span class="sep">/</span>
        <a href="https://icp.gov.moe/?keyword=20260031" target="_blank" rel="noopener noreferrer">萌ICP备20260031号</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { withBase } from 'vitepress'
const site = {value: {title: 'Ying Luan'}}
const year = new Date().getFullYear()
</script>

<style scoped lang="scss">

.site-footer {
  padding: 20px 0;
  color: var(--vp-c-3);
  font-size: 14px;

  .inner {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 16px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .up a,
    .down a{
      color: inherit;
      text-decoration: underline;
      margin: 0 4px;
    }

    .sep{
      margin: 0 6px;
      color: var(--vp-c-4);
    }
  }
}

</style>
