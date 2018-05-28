import Vue from 'vue';
import { mount } from 'vue-test-utils';
import List from '@/components/List';

describe('List.vue', () => {

  it('UL이 노출된다.', () => {
    const Constructor = Vue.extend(List);
    const vm = new Constructor().$mount();

    expect(vm.$el.tagName).toBe('UL');
  });

  it('slot이 정상 동작한다.', () => {
    const cmp = mount(List, {
      slots: {
        default: '<li>fake1</li><li>fake2</li>'
      }
    });

    const list = cmp.find('ul');

    expect(list.findAll('li').length).toBe(2);
  });
});
