<template>
  <div v-if="isEnter">
    <article class="min-h-screen" :class="{
      // 'mt-10': !withoutHeader,
      'mt-0': !withoutHeader,
      'mb-0': !withoutFooter,
    }">
      <div class="pad mobile">
        <RouterView />
      </div>
      <div
        class="pc flex overflow-hidden top-0 transition-all justify-center items-center h-full w-full left-0 bg-[#000] z-[99]">
        <div v-if="!isTrue" class="h-screen">
          <iframe src="https://my.spline.design/moon5labsdesktopechoaicopycopy-tB0qQlJfEmpImOxzFghIrh1A/" class="iframe"
            frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </article>
    <div class="pad mobile absolute right-10 top-2">
      <SetLocale />
    </div>
  </div>

  <!-- <div v-if="!isTrue && isEnter"
    class="pc flex overflow-hidden top-0 transition-all justify-center items-center h-full w-full left-0 bg-[#000] z-[99]">
    <div class="h-screen">
      <iframe src="https://my.spline.design/moon5labsdesktop-AbQCetMoILsbi0EoC6Pd8O6g/" class="iframe" frameborder="0"
        allowfullscreen></iframe>
    </div>
  </div> -->

  <div v-if="!isEnter">
    <div v-if="!isTrue"
      class="fixed flex overflow-hidden top-0 transition-all justify-center items-center h-full w-full left-0 bg-[#000] z-[99]">
      <div class="">
        <img src="./pages/home/images/moon_AE.png" class="pc:w-[30rem] w-[85%] m-auto" />
        <div class="pc:w-[42rem] text-center m-auto -mt-10">
          <h1 class="text-[2rem] text-white font-dfpy-g mobile:text-[2.4rem]">
            {{ $t('home.loginA') }}
          </h1>
          <p class="text-[1.15rem] mobile:text-[1.4rem] text-white text-center opacity-70 mt-2">
            {{ $t('home.loginB') }}
          </p>
          <p class="text-[1.15rem] mobile:text-[1.4rem] text-white text-center opacity-70 mt-2">
            {{ $t('home.loginC') }}
          </p>
          <p class="text-[1.15rem] mobile:text-[1.4rem] text-white text-center opacity-70 px-4 mt-2">
            {{ $t('home.loginD') }}
          </p>
          <div
            class="w-[14rem] flex justify-center items-center gap-4 hover:scale-110 relative text-[1.5rem] text-[#000] bg-white rounded-[3rem] cursor-pointer py-5 m-auto mt-10"
            style="" @click="enterClick">
            {{ $t('home.Enter') }}
          </div>
          <div class="w-full flex justify-center text-[1.15rem] gap-3 mt-6">
            <img v-if="isAgree" src="./pages/home/images/icon_16_check_s.svg" class="mobile:w-6 cursor-pointer"
              @click="agreeClick" />
            <img v-else src="./pages/home/images/icon_16_check_n.svg" class="mobile:w-6 cursor-pointer"
              @click="agreeClick" />
            <div class="text-white">{{ $t('home.agree') }}&nbsp;<a class="underline" href="/terms" target="_blank">{{
              $t('home.Terms')
                }}</a>&nbsp; & &nbsp;<a class="underline" href="/privacy" target="_blank">{{ $t('home.Privacy')
                }}</a></div>
          </div>
        </div>
        <div class="absolute right-10 top-2">
          <SetLocale />
        </div>
      </div>

    </div>
    <div v-if="isTrue" class="min-h-screen">
      <RouterView />
    </div>
  </div>




</template>

<script setup lang="ts">
import { ref, watchEffect, onMounted } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { useLocale } from '@/hooks/use-locale'
import SetLocale from "@/components/set-locale.vue";
import Login from './pages/home/Login'

const { locale } = useLocale();

import Header from '@/components/header'
import Footer from '@/components/footer'
// import Login from '@/components/login.vue'

const { currentRoute } = useRouter()

const isAgree = ref(false);
const withoutFooter = ref(true)
const withoutHeader = ref(true)

const loading = ref(true)

watchEffect(() => {
  const { meta } = currentRoute.value
  if (meta.theme === 'black') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  withoutFooter.value = (meta.withoutFooter as boolean) || false
  withoutHeader.value = (meta.withoutHeader as boolean) || false
})

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    loading.value = false
    setTimeout(() => {
      // loading.value = false
      const loadingModal = document.getElementById('loadingModal')
      if (loadingModal) {
        loadingModal.style.display = 'none'
      }
    }, 20)
  }, 20)
})

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

const isTrue = ref(false);
onMounted(async () => {
  if (localStorage.getItem("authorize")) {
    isEnter.value = true
  }
  if (window.location.pathname == '/terms') {
    isTrue.value = true
  }
  if (window.location.pathname == '/privacy') {
    isTrue.value = true
  }
  window.scrollTo({
    top: 0,
  })
})
</script>

<style lang="less">
.logo-animate {
  animation: LogoAnimation 1s infinite cubic-bezier(0.5, 0, 0.5, 1);
}

.screen-animate {
  animation: ScreenAnimation 1s 1 linear;
}

@keyframes LogoAnimation {
  50% {
    transform: scale(1.2);
  }
}

@keyframes ScreenAnimation {
  60% {
    opacity: 0.4;
    background-color: #fff;
  }

  100% {
    opacity: 0;
  }
}

.btn {
  color: #000;
  width: 200px;
  height: 64px;
  line-height: 64px;
  background: #fff;
  border-radius: 40px;
}

.container {
  width: 100%;
  height: 100vh;
  /* 保证容器本身占满整个屏幕 */
  overflow: hidden;
}

.iframe {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
}
</style>
