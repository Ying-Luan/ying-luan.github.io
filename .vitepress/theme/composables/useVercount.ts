import { nextTick, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vitepress'

export function useVercount() {
  const route = useRoute()
  let stopWatching: (() => void) | undefined
  let loadVersion = 0

  async function loadVercount() {
    const version = ++loadVersion
    await nextTick()
    if (version !== loadVersion) return

    document.getElementById('vercount-script')?.remove()
    document.querySelectorAll('[id^="vercount_value_"]').forEach(el => {
      el.textContent = '—'
    })

    const script = document.createElement('script')
    script.id = 'vercount-script'
    script.src = 'https://events.vercount.one/js'
    script.async = true
    document.body.appendChild(script)
  }

  onMounted(() => {
    void loadVercount()
    stopWatching = watch(
      () => route.path.split(/[?#]/)[0],
      () => { void loadVercount() },
      { flush: 'post' },
    )
  })

  onUnmounted(() => {
    loadVersion++
    stopWatching?.()
    document.getElementById('vercount-script')?.remove()
  })
}
