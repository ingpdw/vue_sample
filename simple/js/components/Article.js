Vue.component('Article', {
  template: `<li>
    <span class="icon" :class="cls">{{deposit}}</span>
    <span class="title">{{symbol}} {{title}}</span>
    <span class="date">{{shortDate}}</span>
  </li>`,
  props: ['type', 'title', 'dateTime'],
  computed: {
    shortDate() {
      return this.dateTime.substring(0, 10);
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
  }
});
