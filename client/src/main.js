import Vue from 'vue';
import VueRouter from 'vue-router';
import VueForm from 'vue-form';
import App from './App.vue';
import Home from './Home.vue';
import User from './User.vue';

import { store } from './store';

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueForm);

const routes = [
  { path: '/', component: Home, meta: { title: 'Lorebook', metaTags: [{ name: 'description', content: 'Lorebook app.'}] } },
  { path: '/user', component: User, meta: { title: 'Lorebook - User', metaTags: [{ name: 'description', content: 'User homepage.'}] } }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags);

  if(nearestWithTitle) document.title = nearestWithTitle.meta.title;

  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if(!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags.map(tagDef => {
    const tag = document.createElement('meta');

    Object.keys(tagDef).forEach(key => {
      tag.setAttribute(key, tagDef[key]);
    });

    tag.setAttribute('data-vue-router-controlled', '');

    return tag;
  })
  // Add the meta tags to the document head.
  .forEach(tag => document.head.appendChild(tag));

  next();
});

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
