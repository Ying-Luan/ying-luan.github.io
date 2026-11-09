<template>
  <section class="site-stats">
    <h2 id="site-stats-title">站点统计</h2>
    <dl class="stats-items">
      <div>
        <dt>总访问量</dt>
        <dd><strong id="vercount_value_site_pv">—</strong><span>次</span></dd>
      </div>
      <div>
        <dt>总访客数</dt>
        <dd><strong id="vercount_value_site_uv">—</strong><span>人</span></dd>
      </div>
    </dl>
  </section>
</template>

<style scoped lang="scss">
.site-stats {
  padding: 18px;
  border-radius: 10px;
  color: var(--color-gray);
  box-shadow: 0 1px 20px -6px rgba(0, 0, 0, 0.5);

  h2 {
    margin: 0 0 14px;
    color: var(--color-text);
    font-size: 16px;
    font-weight: 600;
  }

  .stats-items {
    display: grid;
    gap: 16px;
    margin: 0;
  }

  dt {
    font-size: 14px;
  }

  dd {
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 6px;
    margin: 8px 0 0;
    font-size: 13px;
  }

  strong {
    min-width: 0;
    color: var(--color-accent);
    font-size: 18px;
    font-weight: 400;
    font-variant-numeric: tabular-nums;
    overflow-wrap: anywhere;
  }
}

@media (max-width: 1100px) {
  .site-stats .stats-items {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
  }
}
</style>
