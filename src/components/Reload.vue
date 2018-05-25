<template>
  <button class="btn" @click="reload">
    Reload
  </button>
</template>

<script>
export default {
  name: 'Reload',
  methods: {
    reload: () => {
      location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
  @import "../assets/scss/app.scss";
</style>
