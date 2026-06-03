<template>
  <footer id="footer" class="mu-footer">
    <div
      class="flex justify-between dark:bg-black dark:text-gray-400 bg-primary-1 items-center relative z-10  pb-6 mobile:pb-8">
      <div class="flex justify-between w-11/12 mx-12 flex-wrap md:flex-nowrap flex-col items-center md:flex-row">
        <div class="mobile:w-full mobile:text-[1.2rem] mobile:px-8">
          <div class="flex justify-between">
            <a v-for="item in link" :key="item.url" target="_blank" :href="item.url"
              class="text-white md:mr-5 dark:hover:text-white cursor-pointer opacity-70">
              {{ item.name }}
            </a>
          </div>
          <div class="flex mobile:justify-center gap-10 mt-8">
            <!-- <a href="#" aria-label="twiiter"
              class="w-10 h-10 rounded-full bg-[#121212] flex items-center justify-center border border-gray-700 text-gray-400 transition-all duration-300 hover:border-gray-900 hover:text-white hover:scale-110"
              target="_blank" rel="noopener noreferrer" style="transform: none;">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="icon_40_twiiter">
                  <circle id="Ellipse 98" cx="20" cy="20" r="19.5" stroke="#2F3949" />
                  <path id="Vector"
                    d="M16.2881 11.0811L20.6328 16.8008L20.6934 16.8799L20.7588 16.8057L25.7881 11.0811H28.6387L22.0566 18.5713L22.0127 18.6211L22.0527 18.6738L29.8369 28.9189H23.8682L19.0596 22.6582L18.999 22.5791L18.9336 22.6533L13.4268 28.9189H10.5742L17.6221 20.8984L17.667 20.8477L17.626 20.7949L10.165 11.0811H16.2881ZM13.5166 12.7812L24.6104 27.2217L24.6348 27.2539H26.5381L26.4395 27.123L15.4697 12.6826L15.4453 12.6504H13.416L13.5166 12.7812Z"
                    fill="currentColor" />
                </g>
              </svg>

            </a>
            <a href="#" aria-label="Telegram"
              class="w-10 h-10 rounded-full bg-[#121212] flex items-center justify-center border border-gray-700 text-gray-400 transition-all duration-300 hover:border-gray-900 hover:text-white hover:scale-110"
              target="_blank" rel="noopener noreferrer" style="transform: none;">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="icon_40_tg">
                  <circle id="Ellipse 98" cx="20" cy="20" r="19.5" stroke="#2F3949" />
                  <path id="Vector"
                    d="M28.1943 11.1768C28.6171 11.0196 28.9944 11.0744 29.2314 11.3027C29.4397 11.5036 29.5604 11.8591 29.4932 12.3848L29.4531 12.6201L26.1924 27.8965L26.1855 27.9268C26.0647 28.4359 25.8572 28.7291 25.5947 28.8477C25.3273 28.9683 24.9719 28.9222 24.5283 28.6758L19.5674 25.0439L19.5078 25L19.4551 25.0518L17.0605 27.3438L17.0586 27.3447C16.9246 27.4786 16.8109 27.5924 16.6699 27.6738C16.5508 27.7427 16.409 27.787 16.2178 27.7988L16.5625 22.9082L25.7393 14.666C25.8448 14.5727 25.9119 14.4726 25.915 14.373C25.9185 14.2605 25.8417 14.1866 25.749 14.1533C25.6588 14.121 25.5422 14.1198 25.418 14.1475C25.3236 14.1684 25.2211 14.2065 25.1162 14.2637L25.0127 14.3262L13.6689 21.4248L8.80664 19.917C8.54798 19.8368 8.36052 19.7344 8.24219 19.624C8.12513 19.5148 8.07937 19.4017 8.08887 19.292C8.09862 19.1795 8.16803 19.05 8.32324 18.9141C8.47824 18.7784 8.71284 18.6419 9.03418 18.5176L9.0332 18.5166L28.1953 11.1777L28.1943 11.1768Z"
                    fill="currentColor" />
                </g>
              </svg>

            </a> -->
          </div>

        </div>

        <!-- <div class="flex items-center mt-2 md:mt-0">
          <AppLinks>
            <template #apk><span></span></template>
</AppLinks>
</div> -->
      </div>
    </div>
    <div class="mobile">
      <div class="w-full flex justify-between px-20">
        <div class="text-white py-6 text-[1.2rem] opacity-70">AlterEgo@2025</div>
        <!-- <div class="mr-8"> -->
        <SetLocale />
        <!-- </div> -->
      </div>
    </div>
    <div class="pc pad">
      <div class="text-white py-6 text-[1rem] text-center opacity-70">AlterEgo@2025</div>
    </div>

    <div class="pc pad">
      <div
        class="fixed flex dark:bg-black dark:text-gray-400 justify-between transition-all duration-500 py-3 px-16 items-center w-full z-[101]"
        style="background: rgba(0, 0, 0, 0.8);" :class="{
          '-bottom-full': scrolling === 1,
          'bottom-0': scrolling !== 1,
        }">
        <div class="flex gap-20 text-xl w-88">
          <!-- <img src="./images/icon_24_twiiter.png" />
          <img src="./images/icon_32_telegram.png" /> -->
          <!-- <ThirdLinks
            :circle="false"
            :icons="['twitter', 'youtube', 'telegram', 'medium']"
          /> -->
        </div>
        <SetLocale />
      </div>
    </div>
    <!-- <div
      v-if="!route.path.includes('/airdrop')"
      class="flex items-center text-white fixed backdrop-blur-sm transition-all duration-500 rounded-xl bottom-14 right-8 bg-black/80 justify-between px-4 pr-6 py-3 mobile:right-0 mobile:bottom-0 z-50"
      :class="{
        'pc:-right-full': scrolling === 1,
        'mobile:-right-full': scrolling === 1,
      }"
    >
      <img src="./images/icon_logo.png" class="w-12 mr-2" alt="" />
      <div class="flex items-center">
        <div v-if="true" class="">
          <p class="font-segoe-bl text-[1.5rem] -mt-1" style="font-weight: bold;">
            Siren Sisters
          </p>
          <p class="font-segoe-sb text-[1rem] -mt-1">Smart Crypto Assistant</p>
        </div>
        <Button
          class="hover:scale-110 h-8 py-5 px-6 ml-4 mobile:ml-0 rounded-full btn"
          size="small"
          @click="openTab('https://dapp.sirenai.me/')"
        >
          <div class="text-2xl font-segoe-lb" style="font-weight: bold">Start</div>
        </Button>
      </div>
    </div> -->
  </footer>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute } from "vue-router";
import { Button } from "@arco-design/web-vue";

import SetLocale from "@/components/set-locale.vue";

import { openTab } from "@/common/utils";
import useScroll from "@/hooks/use-scroll";
import useCountDown from "@/hooks/use-countdown";

import AppLinks from "../app-links.vue";
import ThirdLinks from "../third-links.vue";

const { t } = useI18n();

const scrolling = useScroll();
const route = useRoute();
const { isStarted } = useCountDown(1690977600);

const link = computed(() => [
  {
    id: 1,
    url: "/terms",
    name: t('home.Terms_of_Service'),
  },
  {
    id: 2,
    url: "/privacy",
    name: t('home.Privacy_Policy'),
  },
  // {
  //   id: 2,
  //   url: "/",
  //   name: t('home.contact_us'),
  // },

]);
</script>
<style lang="less">
.btn {
  background-image: url("./images/Rectangle.png");
  background-size: cover;
  /* 这会覆盖可能的默认大小设置 */
  background-position: center;
}
</style>
