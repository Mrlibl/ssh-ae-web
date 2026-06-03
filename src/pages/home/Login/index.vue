<template>
  <div
    class="fixed flex overflow-hidden top-0 transition-all justify-center items-center h-full w-full left-0 bg-[#000] z-[99]"
    :style="{ display: isEnter ? 'none' : '' }">
    <div class="">
      <img src="../images/icon.png" class="pc:w-[30rem] w-[85%] m-auto" />
      <div class="pc:w-[42rem] text-center m-auto -mt-10">
        <h1 class="text-[2rem] text-white font-dfpy-g mobile:text-[2.4rem]">
          {{ $t('home.title') }}
        </h1>
        <p class="text-[1.15rem] mobile:text-[1.4rem] text-white text-center opacity-70 mt-2">
          {{ $t('home.titleA') }}
        </p>
        <p class="text-[1.15rem] mobile:text-[1.4rem] text-white text-center opacity-70 mt-2">
          {{ $t('home.titleB') }}
        </p>
        <p class="text-[1.15rem] mobile:text-[1.4rem] text-white text-center opacity-70 px-4 mt-2">
          {{ $t('home.titleC') }}
        </p>
        <div
          class="w-[14rem] flex justify-center items-center gap-4 hover:scale-110 relative text-[1.5rem] text-[#000] bg-white rounded-[3rem] cursor-pointer py-5 m-auto mt-10"
          style="" @click="enterClick">
          {{ $t('home.Enter') }}
        </div>
        <div class="w-full flex justify-center text-[1.15rem] gap-3 mt-6">
          <img v-if="isAgree" src="../images/icon_16_check_s.svg" class="mobile:w-6 cursor-pointer"
            @click="agreeClick" />
          <img v-else src="../images/icon_16_check_n.svg" class="mobile:w-6 cursor-pointer" @click="agreeClick" />
          <div class="text-white">{{ $t('home.agree') }}&nbsp;<a class="underline" href="/terms" target="_blank">{{
            $t('home.Terms_of_Service')
              }}</a>&nbsp;与&nbsp;<a class="underline" href="/privacy" target="_blank">{{ $t('home.Privacy_Policy')
              }}</a></div>
        </div>
      </div>
    </div>

  </div>

</template>
<script setup lang="ts">
// @ts-nocheck
import { onMounted, onBeforeUnmount, ref, computed } from 'vue'
import 'swiper/css'

import links from '@/state/applinks'
import { useLocale } from '@/hooks/use-locale'

const { locale } = useLocale();

const isAgree = ref(false);
const isEnter = ref(false);
const enterClick = () => {
  localStorage.setItem("authorize", 'true');
  if (isAgree.value) {
    isEnter.value = true
  }
}

const agreeClick = () => {
  isAgree.value = !isAgree.value
}

onMounted(async () => {
  if (localStorage.getItem("authorize")) {
    isEnter.value = true
  }
  if (window.location.pathname == '/terms') {
    isEnter.value = false
  }
  console.log(window.location.pathname, 'window.location.pathname')
})


onBeforeUnmount(() => {

});

</script>
<style lang="less">
.btn {
  color: #000;
  width: 200px;
  height: 64px;
  line-height: 64px;
  background: #fff;
  border-radius: 40px;
}
</style>
