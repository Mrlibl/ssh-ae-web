import { ref } from 'vue'

const links = ref<{
  app_store_url: string | undefined
  google_play_url: string | undefined
}>({
  app_store_url: '',
  google_play_url: '',
})

export default links
