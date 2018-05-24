<template>
  <button @click="more">더보기</button>
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

<style scoped>
  button {
    display: block;
    margin-top:10px;
    width: 100%;
    height: 60px;
    border: 1px solid #efefef;
    font-weight: 300;
    font-size: 16px;
    line-height: 58px;
    color: #747880;
    background: transparent;
    cursor: pointer;
  }
</style>
