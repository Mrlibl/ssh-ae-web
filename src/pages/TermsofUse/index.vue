<template>
  <div class="flex flex-col items-center mobile:px-6 pad:px-6">
    <div class="text-5xl font-segoe-lb mt-[10rem]" style="
        background: linear-gradient(to right, #A6B5FF, #ffffff, #ffffff, #FFB5BF);
        -webkit-background-clip: text;
        color: transparent;
        text-align: center;
      ">
      {{ $t('term.title') }}
    </div>
    <div class="pc:w-[70rem] text-3xl font-segoe-lb text-white text-center mt-10">
      {{ $t('term.content') }}
    </div>
    <div class="pc:w-[73rem] mt-12 px-8 pt-10 pb-12 mobile:w-full pad:w-full mobile:rounded-3xl rounded-[2.5rem]"
      style="background: rgba(255, 255, 255, 0.1)">
      <div class="text-white font-segoe-lb text-3xl mb-4">1. {{ $t('term.titleA') }}</div>
      <div class="text-2xl text-white font-segoe-sb">
        {{ $t('term.contentA') }}
      </div>
    </div>
    <div class="w-[73rem] mt-12 px-8 pt-10 pb-12 mobile:w-full pad:w-full mobile:rounded-3xl rounded-[2.5rem]"
      style="background: rgba(255, 255, 255, 0.1)">
      <div class="text-white font-segoe-lb text-3xl mb-4">2. {{ $t('term.titleB') }}</div>
      <div class="text-2xl text-white font-segoe-sb">
        {{ $t('term.contentB') }}
      </div>
    </div>
    <div class="w-[73rem] mt-12 px-8 pt-10 pb-12 mobile:w-full pad:w-full mobile:rounded-3xl rounded-[2.5rem]"
      style="background: rgba(255, 255, 255, 0.1)">
      <div class="text-white font-segoe-lb text-3xl mb-4">3. {{ $t('term.titleC') }}</div>
      <div class="text-2xl text-white font-segoe-sb">
        {{ $t('term.contentC') }}
      </div>
    </div>
    <div class="w-[73rem] mt-12 px-8 pt-10 pb-12 mobile:w-full pad:w-full mobile:rounded-3xl rounded-[2.5rem]"
      style="background: rgba(255, 255, 255, 0.1)">
      <div class="text-white font-segoe-lb text-3xl mb-4">4. {{ $t('term.titleD') }}</div>
      <div class="text-2xl text-white font-segoe-sb">
        {{ $t('term.contentD') }}
      </div>
    </div>
    <div class="w-[73rem] mt-12 px-8 pt-10 pb-12 mobile:w-full pad:w-full mobile:rounded-3xl rounded-[2.5rem]"
      style="background: rgba(255, 255, 255, 0.1)">
      <div class="text-white font-segoe-lb text-3xl mb-4">5. {{ $t('term.titleE') }}</div>
      <div class="text-2xl text-white font-segoe-sb">
        {{ $t('term.contentE') }}
      </div>
    </div>
    <div class="w-[73rem] mt-12 px-8 pt-10 pb-12 mobile:w-full pad:w-full mobile:rounded-3xl rounded-[2.5rem]"
      style="background: rgba(255, 255, 255, 0.1)">
      <div class="text-white font-segoe-lb text-3xl mb-4">6. {{ $t('term.titleF') }}</div>
      <div class="text-2xl text-white font-segoe-sb">
        {{ $t('term.contentF') }}
      </div>
    </div>
    <div class="w-[73rem] mt-12 px-8 pt-10 pb-12 mobile:w-full pad:w-full mobile:rounded-3xl rounded-[2.5rem]"
      style="background: rgba(255, 255, 255, 0.1)">
      <div class="text-white font-segoe-lb text-3xl mb-4">7. {{ $t('term.titleG') }}</div>
      <div class="text-2xl text-white font-segoe-sb">
        {{ $t('term.contentG') }}
      </div>
    </div>
    <div class="w-[73rem] mt-12 px-8 pt-10 pb-12 mobile:w-full pad:w-full mobile:rounded-3xl rounded-[2.5rem]"
      style="background: rgba(255, 255, 255, 0.1)">
      <div class="text-white font-segoe-lb text-3xl mb-4">8. {{ $t('term.titleH') }}</div>
      <div class="text-2xl text-white font-segoe-sb">
        {{ $t('term.contentH') }}
      </div>
    </div>
    <div class="w-[73rem] mt-12 px-8 pt-10 pb-12 mobile:w-full pad:w-full mobile:rounded-3xl rounded-[2.5rem]"
      style="background: rgba(255, 255, 255, 0.1)">
      <div class="text-white font-segoe-lb text-3xl mb-4">9. {{ $t('term.titleI') }}</div>
      <div class="text-2xl text-white font-segoe-sb">
        {{ $t('term.contentI') }}
      </div>
    </div>
    <div class="w-[73rem] my-12 px-8 pt-10 pb-12 rounded-[2.5rem] mobile:w-full pad:w-full mobile:rounded-3xl"
      style="background: rgba(255, 255, 255, 0.1)">
      <div class="text-white font-segoe-lb text-3xl mb-4">10. {{ $t('term.titleJ') }}</div>
      <div class="text-2xl text-white font-segoe-sb">
        <!-- {{ $t('term.content_J') }} -->
        <a href="">{{ $t('term.email') }}: contact@alteredego.io</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
