// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

import demo from './componentsPackage';
Vue.use(demo);

console.log(Vue.toString());
console.log(new Vue());

window.temp = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});

// console.log(JSON.stringify(temp))
// temp.forEach(element => {
//   console.log(element);
// });

// for(let i in temp){
//   console.log(i);
// }

// console.log(temp.$on);

// const _$on = temp.$on;

// temp.$on = function() {
//   console.log('hello world sdddd');
//   _$on();
// };

// const _Vue = function() {
//   return temp;
// };

// /* eslint-disable no-new */
// _Vue();
