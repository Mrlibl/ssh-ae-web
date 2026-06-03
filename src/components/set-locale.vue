<template>
  <section id="setLocale" class="set-locale text-black flex ">
    <Select :model-value="locale" class="dark:text-gray-400 text-white opacity-70" :bordered="false"
      @change="(v) => setLocale(v as Locale)">
      <Option v-for="[value, label] in locales" :key="value" :value="value" class="mobile:text-[0.7rem]">{{
        label
      }}</Option>
    </Select>
  </section>
</template>

<script setup lang="ts">
import { Select, Option } from '@arco-design/web-vue'
import { useLocale } from '@/hooks/use-locale'
import { Locale } from '@/i18n'

const { locale, locales, setLocale } = useLocale()
</script>

<style lang="less">
.dark {
  #setLocale {
    .arco-select-view-single {
      .arco-select-view-suffix {
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
}
</style>
