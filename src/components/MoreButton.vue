<template>
  <button class="btn" @click="more">More</button>
</template>

<script>
export default {
  name: 'MoreButton',
  props: ['url'],
  methods: {
    more() {
      this.$emit('more');
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../assets/scss/app.scss";

  .btn {
    width: 100%;
    height: 48px;
    font-size: 16px;
    position: relative;
    margin-top: 20px;

    &:hover {
      border-color: rgba(#a2a8b2, .6);
    }
  }
</style>
