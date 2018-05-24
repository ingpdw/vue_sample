<template>
  <li>
    <span class="icon" :class="cls">{{deposit}}</span>
    <span class="title">{{symbol}} {{title}}</span>
    <span class="date">{{shortDate}}</span>
  </li>
</template>

<script>
export default {
  name: 'Article',
  props: ['type', 'title', 'date'],
  computed: {
    shortDate() {
      return this.date.substring(0, 10);
    },
    cls() {
      return this.type === 'DEPOSIT' ? 'plus' : 'minus';
    },
    deposit() {
      return this.type === 'DEPOSIT' ? '적립' : '차감';
    },
    symbol() {
      return this.type === 'DEPOSIT' ? '+' : '-';
    },
  },
};
</script>

<style scoped>
  li {
    position: relative;
    padding: 15px 75px 15px 0;
    font-size: 16px;
    border-bottom: 1px solid #efefef;
  }

  .icon {
    display: inline-block;
    min-width: 44px;
    height: 22px;
    margin-right: 4px;
    font-size: 13px;
    color: #bc8d5d;
    line-height: 20px;
    text-align: center;
    border: 1px solid #bc8d5d;
    border-radius: 22px;
  }

  .icon.minus {
    color: #a2a8b2;
    border-color: #a2a8b2;
  }

  .title {
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-all;
  }

  .date {
    position: absolute;
    right: 0;
    top: 17px;
    font-size: 14px;
    color: #8c919a;
  }

</style>
