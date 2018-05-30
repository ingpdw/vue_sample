<template>
  <div id="app">
    <Menu>
      <Reload></Reload>
    </Menu>
    <List>
      <Article v-for="(item, index) in items.pageList"
        :key="index"
        :title="item.reason"
        :type="item.type"
        :date="item.dateTime"></Article>
    </List>
    <MoreButton @more="more"/>
  </div>
</template>

<script>
import Menu from '@/components/Menu';
import List from '@/components/List';
import Article from '@/components/Article';
import Reload from '@/components/Reload';
import MoreButton from '@/components/MoreButton';

const listAPI = '/static/data.json';

export default {
  name: 'App',
  components: {
    List,
    Article,
    Reload,
    Menu,
    MoreButton,
  },
  mounted() {
    this.axios.get(listAPI)
      .then((res) => {
        this.items = res.data;
      });
  },
  data() {
    return {
      items: {},
    };
  },
  methods: {
    more() {
      this.axios.get(listAPI)
        .then((res) => {
          this.items.pageList.push(...res.data.pageList);
        });
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
