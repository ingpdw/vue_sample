import Vue from 'vue';
import Article from '@/components/Article';

describe('Article.vue', () => {
  const title = '테스트 데이터';
  let Constructor, vm;

  beforeEach(() => {
    Constructor = Vue.extend(Article);
    vm = new Constructor({
      propsData: {
        type: 'DEPOSIT',
        title: title,
        date: '2018-05-28T01:58:33.069Z'
      }
    }).$mount();
  })

  it('shortDate가 정상 처리된다.', () => {
    expect( vm.shortDate ).toBe( '2018-05-28' );
  });

  it('plus 정상 처리된다.', () => {
    expect( vm.cls ).toBe( 'plus' );
  });

  it('symbol이 정상 처리된다', () => {
    expect( vm.symbol ).toBe( '+' );
  });

  it('차감이 정상 노출된다.', ( done ) => {
    vm.type = '';
    Vue.nextTick(() => {
      expect( vm.$el.querySelector('.icon').textContent ).toContain( '차감' );
      done();
    });
  });

  it('title이 정상 노출된다.', ( done ) => {
    vm.type = '';
    Vue.nextTick(() => {
      expect( vm.$el.querySelector('.title').textContent ).toContain( title );
      done();
    });
  });
});
