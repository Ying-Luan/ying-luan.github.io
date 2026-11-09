<template>
  <Header />
  <main>
    <ToTop />
    <template v-if="path === ''">
      <Banner />
      <div class="home-content">
        <div class="home-posts">
          <BlogList :posts="posts" />
        </div>
        <aside class="home-sidebar">
          <SiteStats />
        </aside>
      </div>
    </template>
    <Tag v-else-if="path === 'tags/'" />
    <Article v-else />
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from './Header.vue'
import Banner from './Banner.vue'
import Footer from './Footer.vue'
import Article from './Article.vue'
import BlogList from './BlogList.vue'
import Tag from './Tag.vue'
import ToTop from './ToTop.vue'
import SiteStats from './SiteStats.vue'
import { useVercount } from './composables/useVercount'
import { computed } from 'vue'
import { useRoute, useData } from 'vitepress'
import { data as posts } from '../posts.data'
const base = useData().site.value.base
const route = useRoute()
const path = computed(() => route.path.replace(base, '').replace('index.html', ''))

useVercount()

</script>

<style lang="scss">
html {
  scroll-behavior: smooth;
  --global-font: "Noto Serif SC", "MicroSoft Yahei", serif;
  --color-accent: #fe9600;
  --color-gray: #666;
  --color-text: #02111d;
  --color-background: #eee;
  --color-border: #d0d7de;
  --code-line-height: 24px;
  --code-font-family: monospace;
  --code-font-size: 15px;
}

body {
  margin: 0;
  padding: 0;
  font-family: var(--global-font);
  font-size: 16px;
  overflow-x: hidden;
}

* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
}

hr {
  border: none;
  border-bottom: 1px dashed var(--color-border);
}

::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background: var(--color-accent);
}

.home-content {
  display: grid;
  grid-template-columns: minmax(0, 800px) 180px;
  align-items: start;
  gap: 24px;
  max-width: 1052px;
  margin: 0 auto;
  padding: 0 24px;
}

.home-posts {
  min-width: 0;

  .bloglist {
    width: 100%;
  }
}

.home-sidebar {
  margin-top: 74px;
}

@media (max-width: 1100px) {
  .home-content {
    grid-template-columns: minmax(0, 1fr);
    gap: 0;
    max-width: 848px;
  }

  .home-sidebar {
    grid-row: 1;
    margin-top: 24px;
  }
}

@media (max-width: 720px) {
  .home-content {
    padding: 0;
  }

  .home-sidebar {
    margin: 24px 24px 0;
  }
}
</style>
