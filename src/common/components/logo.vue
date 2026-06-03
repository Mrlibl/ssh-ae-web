<template>
  <section class="flex items-center font-segoe-lb text-xl cursor-pointer" @click="scrollTop">
    <!-- <IconLogo :use-current-color="true" class="text-4xl mr-3" /> -->
    <img src="../images/logo.svg" class="mobile:w-[10rem] mobile:mt-0.5 mr-3" />
    <!-- <span v-if="showText">MUVERSE</span>
    <span v-else class="pc pad">MUVERSE</span> -->
  </section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
// import { IconLogo } from '@arco-iconbox/vue-muverse-icon'
defineProps({
  showText: {
    type: Boolean,
    default: false,
  },
})

const router = useRouter()
function scrollTop() {
  scrollTo({ top: 0 })
  router.replace({ name: 'home' })
}
</script>

<style></style>
