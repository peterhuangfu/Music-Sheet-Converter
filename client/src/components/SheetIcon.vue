<template>
  <div style="display:inline-flex;align-items:center">
    <slot name="prefix"></slot>
    <component
      :color="color"
      :is="currentIcon"
      :size="size"
      :style="iconStyle"
      style="margin-right:2px"
    ></component>
    <slot></slot>
    <slot name="suffix"></slot>
  </div>
</template>
<script>
import IconMail from './icons/IconMail.vue';
import IconLeft from './icons/IconLeft.vue';
import IconRight from './icons/IconRight.vue';
import IconMenu from './icons/IconMenu.vue';
export default {
  name: 'SheetIcon',
  props: {
    icon: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'white',
    },
    size: {
      type: String,
      default: 'md',
      validator: val => ['sm', 'md', 'lg'].includes(val),
    },
    iconStyle: {
      type: String,
      default: '',
    },
  },
  computed: {
    currentIcon() {
      switch (this.icon) {
        case 'mail':
          return IconMail;
        case 'left':
          return IconLeft;
        case 'right':
          return IconRight;
        case 'menu':
          return IconMenu;
        default:
          return '';
      }
    },
  },
};
</script>
