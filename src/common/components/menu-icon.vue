<template>
  <section
    class="menu-icon h-8 inline-block rounded-lg cursor-pointer bg-primary w-8"
    @click="emit('click')"
  >
    <div
      class="menu relative w-[20px] bg-white dark:bg-primary-2 mt-0 mx-auto transition-all"
      :class="{
        expand: props.isExpand,
      }"
    ></div>
  </section>
</template>

<script setup lang="ts">
const props = defineProps({
  isExpand: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['click'])
</script>

<style lang="less">
.dark {
  .menu-icon {
    .menu {
      &::before,
      &::after {
        background-color: rgb(var(--brand-7));
      }
    }
  }
}
.menu-icon {
  --height: 3px;
  .menu {
    border-radius: 2px;
    height: var(--height);
    top: 46%;

    &.expand {
      background-color: transparent;

      &::before {
        transform: rotateZ(-45deg);
        top: 0;
      }

      &::after {
        transform: rotateZ(45deg);
        top: 0;
      }
    }

    &::before,
    &::after {
      content: '';
      position: absolute;
      display: block;
      height: var(--height);
      width: 100%;
      border-radius: 2px;
      background-color: #fff;
      transition: all 0.5s;
    }

    &::before {
      top: 7px;
    }

    &::after {
      top: -7px;
    }
  }
}
</style>
