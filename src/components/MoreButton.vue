<template>
  <button class="btn more" @click="more">{{name|capitalize}}</button>
</template>

<script>
import capitalize from '@/filters/capitalize';

export default {
  name: 'MoreButton',
  data() {
    return {
      name: 'more',
    };
  },
  methods: {
    more() {
      this.$emit('more');
    },
  },
  filters: {
    capitalize,
  },
};
</script>

<style lang="scss" scoped>
  @import "../assets/scss/app.scss";

  .more {
    width: 100%;
    height: 48px;
    margin-top: 20px;
  }
</style>
