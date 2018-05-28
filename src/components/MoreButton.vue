<template>
  <button class="btn more" @click="more">More</button>
</template>

<script>
export default {
  name: 'MoreButton',
  methods: {
    more() {
      this.$emit('more');
    },
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
