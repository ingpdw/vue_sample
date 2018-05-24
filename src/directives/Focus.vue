<script>
import Vue from 'vue';

export const focus = {
  inserted( el ) {
    el.focus();
  }
}

Vue.directive('focus', focus)
</script>
