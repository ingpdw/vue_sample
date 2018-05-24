<template>
  <button class="btn-reload" v-on:click="reload">
    <i class="fe-icon-reload"></i>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .btn-reload {
    border: 0;
    width: 18px;
    height: 19px;
    background: transparent;
    background-image: url(http://ui-static.korea.ncsoft.corp/uikit/nccommunity/img/icon/comm-icon-default_@1x.png);
    background-repeat: no-repeat;
    background-position: -298px -20px;
    cursor: pointer;
  }
</style>
