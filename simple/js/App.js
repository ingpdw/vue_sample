var app = new Vue({
  el: '#app',
  template: `
    <List>
      <Article v-for="(item, index) in items"
        :key="index"
        :type="item.type"
        :title="item.reason"
        :dateTime="item.dateTime"
      ></Article>
    </List>`,
  data: {
    items: [
      {type: 'DEPOSIT', reason: '글 작성', dateTime: '2018-05-04T01:58:33.069Z'},
      {type: 'DEPOSIT', reason: '글 작성', dateTime: '2018-05-02T06:28:39.595Z'},
      {type: '', reason: '글 삭제', dateTime: '2018-05-28T06:28:39.595Z'}
    ]
  }
});
