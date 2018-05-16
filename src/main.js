// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import vmButton from 'temp/es5/button';
import vmField from 'temp/es5/field';
import vmRadio from 'temp/es5/radio';
import TestRadio from '@/components/TestRadio.vue';

Vue.component('test-radio', TestRadio);

Vue.use(vmButton);
Vue.use(vmField);
Vue.use(vmRadio);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
