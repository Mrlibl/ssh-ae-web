<template>
  <section class="home-header bg-primary-1 relative justify-center section-container"
    :style="`min-height: calc(100vh - 0rem)`">
    <div class="w-full z-[15]">
      <img src="./images/moon_AE.png" class="w-full h-full" />
    </div>
    <div class="absolute bottom-24 z-[30]" v-animate-onscroll="'animate__animated animate__fadeInUp animate__delay-2s'">
      <img src="../home/images/btnA.png" class="w-[25rem] hover:scale-110"
        @click="openTab('https://app.alteredego.io/app')" />
    </div>
  </section>

  <section class="overflow-hidden">
    <section ref="feature" class="relative py-10 bg-primary-1 text-center section-container">
      <img src="../home/images/bg-A.png" />
      <div class="absolute top-32 z-[30]" v-animate-onscroll="'animate__animated animate__fadeInUp animate__delay-2s'">
        <h1 v-animate-onscroll="'animate__animated animate__fadeInUp'"
          class="font-segoe-sb text-center text-4xl text-white relative z-10">
          {{ $t('home.title') }}
        </h1>
        <p v-animate-onscroll="'animate__animated animate__fadeInUp'"
          class="font-segoe-sb px-6 text-[1.3rem] mt-[11rem]" style="color: rgba(255, 255, 255, 0.7);">
          {{ $t('home.content') }}
        </p>

        <div class="mt-24">
          <h1 v-animate-onscroll="'animate__animated animate__fadeInUp'"
            class="font-segoe-sb text-center text-[1.6rem] text-white relative z-10">
            {{ $t('home.use_title') }}
          </h1>
          <p v-animate-onscroll="'animate__animated animate__fadeInUp'" class="font-segoe-sb px-28 text-[1.3rem] mt-4"
            style="color: rgba(255, 255, 255, 0.7);">
            {{ $t('home.use_content') }}
          </p>
        </div>

        <div class="mt-14">
          <h1 v-animate-onscroll="'animate__animated animate__fadeInUp'"
            class="font-segoe-sb text-center text-[1.6rem] text-white relative z-10">
            {{ $t('home.use_titleA') }}
          </h1>
          <p v-animate-onscroll="'animate__animated animate__fadeInUp'" class="font-segoe-sb px-28 text-[1.3rem] mt-4"
            style="color: rgba(255, 255, 255, 0.7);">
            {{ $t('home.use_contentA') }}
          </p>
        </div>
        <div class="mt-14">
          <h1 v-animate-onscroll="'animate__animated animate__fadeInUp'"
            class="font-segoe-sb text-center text-[1.6rem] text-white relative z-10">
            {{ $t('home.use_titleB') }}
          </h1>
          <p v-animate-onscroll="'animate__animated animate__fadeInUp'" class="font-segoe-sb px-28 text-[1.3rem] mt-4"
            style="color: rgba(255, 255, 255, 0.7);">
            {{ $t('home.use_contentB') }}
          </p>
        </div>

        <div class="mt-14">
          <h1 v-animate-onscroll="'animate__animated animate__fadeInUp'"
            class="font-segoe-sb text-center text-[1.6rem] text-white relative z-10">
            {{ $t('home.use_titleC') }}
          </h1>
          <p v-animate-onscroll="'animate__animated animate__fadeInUp'" class="font-segoe-sb px-28 text-[1.3rem] mt-4"
            style="color: rgba(255, 255, 255, 0.7);">
            {{ $t('home.use_contentC') }}
          </p>
        </div>

        <div class="mt-14">
          <h1 v-animate-onscroll="'animate__animated animate__fadeInUp'"
            class="font-segoe-sb text-center text-[1.6rem] text-white relative z-10">
            {{ $t('home.use_titleD') }}
          </h1>
          <p v-animate-onscroll="'animate__animated animate__fadeInUp'" class="font-segoe-sb px-28 text-[1.3rem] mt-4"
            style="color: rgba(255, 255, 255, 0.7);">
            {{ $t('home.use_contentD') }}
          </p>
        </div>
      </div>

    </section>


    <section ref="scene" class="py-20 bg-primary-2 section-container relative">
      <h1 v-animate-onscroll="'animate__animated animate__fadeInUp'"
        class="font-segoe-sb text-center text-4xl text-white relative z-10">
        {{ $t('home.titleA') }}
      </h1>
      <p v-animate-onscroll="'animate__animated animate__fadeInUp'" class="px-2 text-[1.3rem] text-center mt-4"
        style="color: rgba(255, 255, 255, 0.7);">
        {{ $t('home.contentA') }}
      </p>
      <div class="mx-6 overflow-hidden mt-14">
        <img src="../home/images/picA.png" alt=""
          class="object-cover transition-transform duration-700 hover:scale-110" />
      </div>
      <!-- <img src="../home/images/picA.png" class="hover:scale-110 mt-10" /> -->

      <div class="mt-14">
        <h1 v-animate-onscroll="'animate__animated animate__fadeInUp'"
          class="font-segoe-lb text-center text-[1.6rem] text-white relative z-10">
          {{ $t('home.project_title') }}
        </h1>
        <p v-animate-onscroll="'animate__animated animate__fadeInUp'"
          class="font-segoe-sb px-4 text-center text-[1.3rem] mt-4" style="color: rgba(255, 255, 255, 0.7);">
          {{ $t('home.project_content') }}
        </p>
      </div>

      <div class="mt-14">
        <h1 v-animate-onscroll="'animate__animated animate__fadeInUp'"
          class="font-segoe-lb text-center text-[1.6rem] text-white relative z-10">
          {{ $t('home.project_titleA') }}
        </h1>
        <p v-animate-onscroll="'animate__animated animate__fadeInUp'"
          class="font-segoe-sb px-16 text-center text-[1.3rem] mt-4" style="color: rgba(255, 255, 255, 0.7);">
          {{ $t('home.project_contentA') }}
        </p>
      </div>

      <div class="mt-14">
        <h1 v-animate-onscroll="'animate__animated animate__fadeInUp'"
          class="font-segoe-lb text-center text-[1.6rem] text-white relative z-10">
          {{ $t('home.project_titleB') }}
        </h1>
        <p v-animate-onscroll="'animate__animated animate__fadeInUp'"
          class="font-segoe-sb px-24 text-center text-[1.3rem] mt-4" style="color: rgba(255, 255, 255, 0.7);">
          {{ $t('home.project_contentB') }}
        </p>
      </div>

      <div class="mt-14">
        <h1 v-animate-onscroll="'animate__animated animate__fadeInUp'"
          class="font-segoe-lb text-center text-[1.6rem] text-white relative z-10">
          {{ $t('home.project_titleC') }}
        </h1>
        <p v-animate-onscroll="'animate__animated animate__fadeInUp'"
          class="font-segoe-sb px-20 text-center text-[1.3rem] mt-4" style="color: rgba(255, 255, 255, 0.7);">
          {{ $t('home.project_contentC') }}
        </p>
      </div>

      <div class="relative mt-20">
        <div class="mx-6 overflow-hidden">
          <img src="../home/images/picB.png" alt=""
            class="object-cover transition-transform duration-700 hover:scale-110" />
        </div>
        <div class="absolute px-10 bottom-4">
          <h1 v-animate-onscroll="'animate__animated animate__fadeInUp'"
            class="font-segoe-lb text-[1.6rem] text-white relative z-10">
            {{ $t('home.titleB') }}
          </h1>
          <p v-animate-onscroll="'animate__animated animate__fadeInUp'" class="font-segoe-sb text-[1.3rem] mt-0"
            style="color: rgba(255, 255, 255, 0.7);">
            {{ $t('home.contentB') }}
          </p>
        </div>
      </div>
      <div class="relative mt-20">
        <div class="mx-6 overflow-hidden">
          <img src="../home/images/picC.png" alt=""
            class="object-cover transition-transform duration-700 hover:scale-110" />
        </div>
        <div class="absolute px-10 bottom-4">
          <h1 v-animate-onscroll="'animate__animated animate__fadeInUp'"
            class="font-segoe-lb text-[1.6rem] text-white relative z-10">
            {{ $t('home.titleC') }}
          </h1>
          <p v-animate-onscroll="'animate__animated animate__fadeInUp'" class="font-segoe-sb text-[1.3rem] mt-0"
            style="color: rgba(255, 255, 255, 0.7);">
            {{ $t('home.contentC') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Eco -->
    <!-- <section ref="example" class="p-4 py-20 bg-primary-1 relative section-container">
      <h1 v-animate-onscroll="'animate__animated animate__fadeInUp'"
        class="font-segoe-sb text-center text-4xl text-white relative z-10">
        {{ $t('home.titleD') }}
      </h1>
      <p v-animate-onscroll="'animate__animated animate__fadeInUp'"
        class="px-2text-[1.2rem] text-white text-center opacity-70 mt-4">
        {{ $t('home.contentD') }}
      </p>
      <h1 v-animate-onscroll="'animate__animated animate__fadeInUp'"
        class="font-segoe-sb text-center text-[1.6rem] text-white mt-10">
        {{ $t('home.partners') }}
      </h1>
      <div class="flex flex-wrap justify-center mt-12" v-animate-onscroll="'animate__animated animate__fadeInUp'">
        <div class="w-full justify-between grid grid-cols-3 grid-rows-4 gap-14  mt-4">
          <div class="text-center" @click="openTab('https://www.binance.com/')">
            <img src="../home/images/1.png" class="w-[8rem] mt-2" />
          </div>
          <div class="text-center" @click="openTab('https://www.gate.io/')">
            <img src="../home/images/2.png" class="w-[7rem]" />
          </div>
          <div class="text-center" @click="openTab('https://four.meme/')">
            <img src="../home/images/3.png" class="w-[7rem]" />
          </div>
          <div class="text-center" @click="openTab('https://novabank.finance/')">
            <img src="../home/images/4.png" class="w-[9rem] mt-1" />
          </div>
          <div class="text-center" @click="openTab('https://dodoex.io/')">
            <img src="../home/images/5.png" class="w-[8rem] mt-2" />
          </div>
          <div class="text-center" @click="openTab('https://www.dextools.io/')">
            <img src="../home/images/6.png" class="w-[9rem]" />
          </div>
          <div class="text-center" @click="openTab('https://www.weex.com/')">
            <img src="../home/images/7.png" class="w-[8rem] mt-1" />
          </div>
          <div class="text-center" @click="openTab('https://www.bitget.com/')">
            <img src="../home/images/8.png" class="w-[7rem]" />
          </div>
          <div class="text-center" @click="openTab('https://www.kucoin.com/')">
            <img src="../home/images/9.png" class="w-[8rem]" />
          </div>
          <div class="text-center" @click="openTab('https://www.mexc.com/')">
            <img src="../home/images/10.png" class="w-[8rem] mt-1" />
          </div>
          <div class="text-center" @click="openTab('https://www.okx.com/')">
            <img src="../home/images/11.png" class="w-[5rem] mt-1" />
          </div>
          <div class="text-center" @click="openTab('https://www.bybit.com')">
            <img src="../home/images/12.png" class="w-[5rem]" />
          </div>
        </div>
      </div>
    </section> -->


    <!-- news -->
    <section ref="cost" class="bg-primary-1 section-container mt-10">
      <h1 v-animate-onscroll="'animate__animated animate__fadeInUp'"
        class="font-dfpy-g text-center text-4xl text-white relative z-10">
        {{ $t('home.titleE') }}
      </h1>
      <p v-animate-onscroll="'animate__animated animate__fadeInUp'"
        class="text-[1.3rem] px-6 text-white text-center opacity-70 mt-4">
        {{ $t('home.contentE') }}
      </p>
      <div v-animate-onscroll="'animate__animated animate__fadeInUp'" @click="openTab('https://x.com/AlterEgo_0101')"
        class="w-[12rem] flex gap-4 mt-20">
        <img src="../home/images/twitter.svg" class="w-[2.5rem]" />
        <div class="text-white text-[1.6rem]">Twitter / X</div>
      </div>
      <!-- <div v-animate-onscroll="'animate__animated animate__fadeInUp'" class="w-[12rem] flex gap-4 mt-10">
        <img src="../home/images/tg.svg" class="w-[2.5rem]" />
        <div class="text-white text-[1.6rem]">Telegram</div>
      </div> -->
      <div v-animate-onscroll="'animate__animated animate__fadeInUp'" class="w-[12rem] flex gap-4 mt-10">
        <img src="../home/images/Subtract.svg" class="w-[2.5rem]" />
        <div class="text-white text-[1.6rem]" @click="openTab('mailto:contact@alteredego.io')">E-mail</div>
      </div>

      <img src="../home/images/footer-new.png" class="mt-20" />

      <div v-animate-onscroll="'animate__animated animate__fadeInUp'" class="w-full flex justify-between px-6 py-10">
        <div class="text-[1.3rem] text-white opacity-70" @click="openTab('/terms')">
          {{ $t('home.Terms') }}
        </div>
        <div class="text-[1.3rem] text-white opacity-70" @click="openTab('/privacy')">
          {{ $t('home.Privacy') }}
        </div>
        <div class="text-[1.3rem] text-white opacity-70">
          AlterEgo © 2025
        </div>
      </div>
    </section>
  </section>

</template>
<script setup lang="ts">
// @ts-nocheck
import { onMounted, onBeforeUnmount, ref, computed } from 'vue'
import 'swiper/css'

import { GetHomeInfo, getHomeInfo } from '@/common/api/home'
import links from '@/state/applinks'
import { openTab } from '@/common/utils'
import Eventbus from '@/common/api/Eventbus'
import { useLocale } from '@/hooks/use-locale'

const { locale } = useLocale();

const screenHeight = ref(window.innerHeight);

const currentLang = ref(localStorage.getItem("locale") || 'en');
Eventbus.on('setLocale', (data) => {
  currentLang.value = data
})

const handleScroll = () => {
  if (window.scrollY > screenHeight.value) {
    Eventbus.emit('header-bg', true)
  } else {
    Eventbus.emit('header-bg', false)
  }
}

onMounted(async () => {
  window.addEventListener('scroll', handleScroll);
})


onBeforeUnmount(() => {

});

</script>
<style lang="less">
@media (min-width: 1180px) {
  .home-header {
    .apk {
      transform: translate(0, -8px);
      justify-content: flex-start;

      .arco-link {
        justify-content: flex-start;
      }
    }
  }

  .image-container {
    display: flex;
    width: 100vw;
    height: 400px;
    /* 根据需求调整 */
    overflow: hidden;
  }

  .image {
    width: 50%;
    height: 100%;
    object-fit: cover;
  }

  .left {
    clip-path: polygon(0 0, 100% 0, 85% 100%, 0% 100%);
  }

  .right {
    clip-path: polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
  }



  // .responsive-video {
  //  width: 100%;
  // height: 1080px;
  // object-fit: cover;
  /* 让视频铺满容器，自动裁剪 */
  // }

  .spine-wrapper {
    width: 50vw;
  }

  // .spine-wrapperA {
  //   width: 100%;
  // }
}

.button {
  // background-image: url('./image/Rectangle213.png');
  // background-size: cover;
  /* 这会覆盖可能的默认大小设置 */
  // background-position: center;
  color: #000;
  width: 294px;
  height: 64px;
  line-height: 64px;
  background: #fff;
  // border: 1px solid #fff;
  border-radius: 40px;
}

.buttonA {
  color: #000;
  width: 18rem;
  height: 4rem;
  line-height: 4rem;
  background: #fff;
  border-radius: 40px;
}

/* 轮播容器 */
.carousel-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;
}

/* 轨道：包含两个 Spine 画布 */
.carousel-track {
  display: flex;
  width: 200vw;
  /* 两个画布各 100% */
  height: 100vh;
  transition: transform 0.3s ease-in-out;
}

/* 每个 Spine 画布 */
.spine-wrapperA {
  width: 100vw;
  /* 占满整个屏幕 */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.content {
  background: url('./images/Group418.svg');
  background-size: cover;
  background-position: center;
  background-color: rgba(33, 35, 86, 0.7);
  width: 74rem;
  height: 600px;
  border-radius: 32px 32px 32px 32px;
}

.content-m {
  background: url('./images/Group418-m.svg');
  background-size: cover;
  background-position: center;
  background-color: rgba(33, 35, 86, 0.7);
  width: 100%;
  height: 30rem;
  border-radius: 16px 16px 16px 16px;
}

@keyframes orbit {
  0% {
    transform: rotate(0deg) translateY(0px);
  }

  25% {
    transform: rotate(0deg) translateX(0) translateY(5px);
  }

  50% {
    transform: rotate(0deg) translateX(0px) translateY(10px);
  }

  75% {
    transform: rotate(0deg) translateX(0) translateY(5px);
  }

  100% {
    transform: rotate(0deg) translateY(0px);
  }
}

.animate-drop-orbit {
  animation:
    dropIn 2s ease-out forwards,
    orbit 10s ease-in-out infinite;
  animation-delay: 0s, 2s;
  animation-fill-mode: forwards;
  transform-origin: left center;
}

.hover-link {
  border: 1px solid #2F3949;
  transition: border 0.3s;
}

.hover-link:hover {
  border-color: #666;
  /* 鼠标悬停边框变灰 */
}
</style>
