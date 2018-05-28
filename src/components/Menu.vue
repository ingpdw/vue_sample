<template>
  <div class="menu">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Menu',
};
</script>

<style scoped>
  div.menu {
    text-align: right;
  }
</style>
