// @ts-nocheck
import { ref } from 'vue'

export default function useScroll() {
  const scrolling = ref(0)
  let timer: NodeJS.Timeout
  let beforeScrollTop = document.documentElement.scrollTop

  window.addEventListener(
    'scroll',
    () => {
      const afterScrollTop = document.documentElement.scrollTop
      const delta = afterScrollTop - beforeScrollTop
      if (delta > 0) {
        // down
        scrolling.value = 1
      } else if (delta < 0) {
        scrolling.value = -1
      }
      beforeScrollTop = afterScrollTop
      clearTimeout(timer)
      timer = setTimeout(() => {
        scrolling.value = 0
      }, 5000)
    },
    false,
  )

  return scrolling
}
