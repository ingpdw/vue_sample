import Vue from 'vue';
import List from '@/components/List';

describe('List.vue', () => {
  it('should render correct list', () => {
    const Constructor = Vue.extend(List);
    const vm = new Constructor().$mount();
  });
});
