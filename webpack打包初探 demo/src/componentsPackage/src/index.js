import vueDemo from './components/demo';
import vueDemo2 from './components/demo2';

// const demo = {
//   install(Vue, options) {
//     Vue.component(vueDemo.name, vueDemo);
//   },
// };

const demo2 = {
  install(Vue, options) {
    Vue.component(vueDemo2.name, vueDemo2);
    Vue.component(vueDemo.name, vueDemo);
  },
};

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(demo2);
  // window.Vue.use(demo);
}

export default demo2;
