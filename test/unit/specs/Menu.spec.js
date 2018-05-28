import Vue from 'vue';
import Menu from '@/components/Menu';

describe('Menu.vue', () => {
  it('Menu 뷰모델을 생성한다',()=>{
    const Constructor = Vue.extend(Menu);
    const vm = new Constructor().$mount();

    expect(vm).not.toBe(null);
  });
});
