<template>
  <div id="app">
    <Menu>
      ({{tick}})
      <Reload></Reload>
    </Menu>
    <List>
      <Article v-for="(item, index) in list"
        :key="index"
        :title="item.reason"
        :type="item.type"
        :date="item.dateTime"></Article>
    </List>
    <MoreButton @more="more"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Menu from '@/components/Menu';
import List from '@/components/List';
import Article from '@/components/Article';
import Reload from '@/components/Reload';
import MoreButton from '@/components/MoreButton';
import timer from '@/mixins/timer';

export default {
  name: 'App',
  components: {
    List,
    Article,
    Reload,
    Menu,
    MoreButton,
  },
  mixins: [timer],
  computed: mapGetters([
    'list',
  ]),
  mounted() {
    this.start(this.count);
    this.$store.dispatch('getList');
  },
  methods: {
    more() {
      this.$store.dispatch('addList');
    },
    count(tick) {
      if (tick === 100) {
        this.stop();
      }
    },
  },
};
</script>

<style lang="scss">
  @import "./assets/scss/app.scss";

  $margin: 20px;

  #app {
    margin:$margin;
  }
</style>
