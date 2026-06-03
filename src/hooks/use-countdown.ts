import { ref } from 'vue'

import serverTime from '@/state/server-time'
import { diffTime } from '@/common/utils'

export default function useCountDown(e: number) {
  const restTime = ref()
  const endTime = ref(e)
  const isStarted = ref<undefined | boolean>(undefined)
  const formatedRestTime = ref({
    d: '',
    h: '',
    m: '',
    s: '',
  })
  async function getRestTime() {
    restTime.value = endTime.value - serverTime.value
    isStarted.value = restTime.value < 0
    formatedRestTime.value = diffTime(restTime.value)
  }

  function updateEndTime(e: number) {
    restTime.value = undefined
    endTime.value = e
  }

  const interval = setInterval(() => {
    restTime.value = restTime.value - 1
    if (restTime.value && restTime.value < 0) {
      isStarted.value = true
      clearInterval(interval)
    } else getRestTime()
  }, 1000)

  return {
    formatedRestTime,
    updateEndTime,
    isStarted,
  }
}
