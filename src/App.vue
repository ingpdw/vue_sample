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
import Menu from './components/Menu';
import List from './components/List';
import Article from './components/Article';
import Reload from './components/Reload';
import MoreButton from './components/MoreButton';

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
    this.axios.get('/static/data.json')
    .then( (res) => {
      this.items = res.data;
    })
    .catch( (error) => {
      console.log(error);
    });
  },
  data() {
    return {
      items: {},
    };
  },
  methods: {
    more() {
      this.axios.get('/static/data.json')
      .then( (res) => {
        this.items.pageList.push(...res.data.pageList);
      });
    },
  },
};
</script>

<style>
  body {
    font-family: -apple-system,BlinkMacSystemFont,Roboto,"맑은 고딕","Malgun Gothic",
    "MS PGothic","돋움",Dotum,sans-serif; overflow-y: scroll; }
  ul, ol, li {  margin: 0;padding: 0;list-style-type: none; }
  #app { margin:20px; }
</style>
