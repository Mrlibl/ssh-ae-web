<template>
  <div class="flex flex-col items-center mobile:px-6 pad:px-6">
    <div class="text-5xl font-segoe-lb mt-[10rem]" style="
        background: linear-gradient(to right, #ffffff, #ffb7f7, #9bedff, #ffffff);
        -webkit-background-clip: text;
        color: transparent;
        text-align: center;
      ">
      {{ $t('privacy.title') }}
    </div>
    <div class="w-[73rem] mobile:w-full pad:w-full text-2xl font-segoe-sb text-white text-center mt-10">
      {{ $t('privacy.content') }}
    </div>

    <div class="w-[73rem] mt-12 px-8 pt-10 pb-12 mobile:w-full mobile:rounded-3xl pad:w-full rounded-[2.5rem]"
      style="background: rgba(255, 255, 255, 0.1)">
      <div class="text-white font-segoe-lb text-3xl mb-4">1. {{ $t('privacy.title_A') }}</div>
      <div class="text-2xl text-white font-segoe-sb">
        <div>
          {{ $t('privacy.content_A') }}
          <ul class="px-6">
            <li class="list-disc">{{ $t('privacy.content_A_wrap_A') }}</li>
            <li class="list-disc">{{ $t('privacy.content_A_wrap_B') }}</li>
            <li class="list-disc">
              {{ $t('privacy.content_A_wrap_C') }}
            </li>
            <li class="list-disc">{{ $t('privacy.content_A_wrap_D') }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="w-[73rem] mt-12 px-8 pt-10 pb-12 mobile:w-full mobile:rounded-3xl pad:w-full rounded-[2.5rem]"
      style="background: rgba(255, 255, 255, 0.1)">
      <div class="text-white font-segoe-lb text-3xl mb-4">2. {{ $t('privacy.title_B') }}</div>
      <div class="text-2xl text-white font-segoe-sb">
        <div>
          {{ $t('privacy.content_B') }}
          <ul class="px-6">
            <li class="list-disc">{{ $t('privacy.content_B_wrap_A') }}</li>
            <li class="list-disc">{{ $t('privacy.content_B_wrap_B') }}</li>
            <li class="list-disc">
              {{ $t('privacy.content_B_wrap_C') }}
            </li>
            <li class="list-disc">{{ $t('privacy.content_B_wrap_D') }}</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="w-[73rem] mt-12 px-8 pt-10 pb-12 mobile:w-full mobile:rounded-3xl pad:w-full rounded-[2.5rem]"
      style="background: rgba(255, 255, 255, 0.1)">
      <div class="text-white font-segoe-lb text-3xl mb-4">3. {{ $t('privacy.title_C') }}</div>
      <div class="text-2xl text-white font-segoe-sb">
        <div>
          {{ $t('privacy.content_C') }}
          <ul class="px-6">
            <li class="list-disc">{{ $t('privacy.content_C_wrap_A') }}</li>
            <li class="list-disc">{{ $t('privacy.content_C_wrap_B') }}</li>
            <li class="list-disc">
              {{ $t('privacy.content_C_wrap_C') }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="w-[73rem] mt-12 px-8 pt-10 pb-12 mobile:w-full mobile:rounded-3xl pad:w-full rounded-[2.5rem]"
      style="background: rgba(255, 255, 255, 0.1)">
      <div class="text-white font-segoe-lb text-3xl mb-4">4. {{ $t('privacy.title_D') }}</div>
      <div class="text-2xl text-white font-segoe-sb">
        <div>
          {{ $t('privacy.content_D') }}
        </div>
      </div>
    </div>

    <div class="w-[73rem] mt-12 px-8 pt-10 pb-12 mobile:w-full mobile:rounded-3xl pad:w-full rounded-[2.5rem]"
      style="background: rgba(255, 255, 255, 0.1)">
      <div class="text-white font-segoe-lb text-3xl mb-4">5. {{ $t('privacy.title_E') }}</div>
      <div class="text-2xl text-white font-segoe-sb">
        <div>
          {{ $t('privacy.content_E') }}
          <ul class="px-6">
            <li class="list-disc">{{ $t('privacy.content_E_wrap_A') }}</li>
            <li class="list-disc">{{ $t('privacy.content_E_wrap_B') }}</li>
            <li class="list-disc">
              {{ $t('privacy.content_E_wrap_C') }}@{{ $t('privacy.content_E_wrap_D') }}
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="w-[73rem] mt-12 px-8 pt-10 pb-12 mobile:w-full mobile:rounded-3xl pad:w-full rounded-[2.5rem]"
      style="background: rgba(255, 255, 255, 0.1)">
      <div class="text-white font-segoe-lb text-3xl mb-4">6. {{ $t('privacy.title_F') }}</div>
      <div class="text-2xl text-white font-segoe-sb">
        <div>
          {{ $t('privacy.content_F') }}
        </div>
      </div>
    </div>


    <div class="w-[73rem] mt-12 px-8 pt-10 pb-12 mobile:w-full mobile:rounded-3xl pad:w-full rounded-[2.5rem]"
      style="background: rgba(255, 255, 255, 0.1)">
      <div class="text-white font-segoe-lb text-3xl mb-4">7. {{ $t('privacy.title_G') }}</div>
      <div class="text-2xl text-white font-segoe-sb">
        <div>
          {{ $t('privacy.content_G') }}
        </div>
      </div>
    </div>


    <div class="w-[73rem] mt-12 px-8 pt-10 pb-12 mobile:w-full mobile:rounded-3xl pad:w-full rounded-[2.5rem]"
      style="background: rgba(255, 255, 255, 0.1)">
      <div class="text-white font-segoe-lb text-3xl mb-4">8. {{ $t('privacy.title_H') }}</div>
      <div class="text-2xl text-white font-segoe-sb">
        <div>
          {{ $t('privacy.content_H') }}
        </div>
      </div>
    </div>

    <div class="w-[73rem] mt-12 px-8 pt-10 pb-12 mobile:w-full mobile:rounded-3xl pad:w-full rounded-[2.5rem]"
      style="background: rgba(255, 255, 255, 0.1)">
      <div class="text-white font-segoe-lb text-3xl mb-4">9. {{ $t('privacy.title_I') }}</div>
      <div class="text-2xl text-white font-segoe-sb">
        <div>{{ $t('privacy.content_I') }}</div>
      </div>
    </div>


    <div class="w-[73rem] my-12 px-8 pt-10 pb-12 mobile:w-full mobile:rounded-3xl pad:w-full rounded-[2.5rem]"
      style="background: rgba(255, 255, 255, 0.1)">
      <div class="text-white font-segoe-lb text-3xl mb-4">10. {{ $t('privacy.title_J') }}</div>
      <div class="text-2xl text-white font-segoe-sb">
        <div>
          <a href="">{{ $t('privacy.email') }} contact@alteredego.io</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
