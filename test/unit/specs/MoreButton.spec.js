import Vue from 'vue';
import { mount } from 'vue-test-utils';
import MoreButton from '@/components/MoreButton';

describe('MoreButton.vue', () => {

  it('BUTTON이 노출된다.', () => {
    const Constructor = Vue.extend(MoreButton);
    const vm = new Constructor().$mount();

    expect(vm.$el.tagName).toBe('BUTTON');

    expect(vm.$el.textContent).toContain('More');
  });

  it('BUTTON클릭이 정상 동작한다.', () => {
    const cmp = mount( MoreButton, {});
    const spy = jest.spyOn(cmp.vm, 'more');
    cmp.update();

    const el = cmp.find('.more').trigger('click');

    expect(cmp.vm.more).toBeCalled();

    expect(cmp.vm.more).toHaveBeenCalledTimes(1);
  });
});
