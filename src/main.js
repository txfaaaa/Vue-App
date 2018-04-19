import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './router/index.js';

import 'common/stylus/index.styl';

Vue.use(VueResource); // 引入VueResource

// /* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
