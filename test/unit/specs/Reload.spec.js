import Vue from 'vue';
import { mount } from 'vue-test-utils';
import Reload from '@/components/Reload';

describe('Reload.vue', () => {

  it('BUTTON이 노출된다.', () => {
    const Constructor = Vue.extend(Reload);
    const vm = new Constructor().$mount();

    expect(vm.$el.tagName).toBe('BUTTON');

    expect(vm.$el.textContent).toContain('Reload');
  });


});
