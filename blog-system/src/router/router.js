import Vue from 'vue/dist/vue';
import VueRouter from 'vue-router';

import Header from '../components/header.vue';
import Sidebar from '../components/sidebar/sidebar.vue';
import Content from '../components/content/content.vue';

/**
 * TODO
 * Lazy Loading routes
 * @returns {Promise<*>|*}
 * @constructor
 */
const Article = () => import(/* webpackChunkName: "content" */ '../components/content/article.vue');
const TopFiveArticles = () => import(/* webpackChunkName: "content" */ '../components/content/topFiveArticles.vue');
const AllFiveArticles = () => import(/* webpackChunkName: "content" */ '../components/content/allArticles.vue');



Vue.use(VueRouter);

const routes =  [
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    meta: {
      homeMeta: 'home'
    },
    components: {
      header: Header,
      sidebar: Sidebar,
      content: Content
    },
    beforeEnter: (to, from, next) => {
      console.log(`路由独享守卫 beforeEnter: ${from.name} -> ${to.name}`);
      next(); // 必须调用next()才会跳转至 '/home'
      // next({path: '/categories'});
    },
    children: [
      {
        name: 'topFiveArticles',
        path: '',
        meta: {
          homeChildrenMeta: 'topFiveArticles'
        },
        component: TopFiveArticles
      }
    ]
  },
  {
    name: 'articles',
    path: '/articles',
    components: {
      header: Header,
      sidebar: Sidebar,
      content: Content
    },
    children: [
      {
        name: 'article',
        path: ':articleId',
        component: Article
      }
    ]
  },
  {
    name: 'categories',
    path: '/categories',
    components: {
      header: Header,
      sidebar: Sidebar,
      content: Content
    },
    children: [
      {
        name: 'categoryName',
        path: ':categoryName',
        component: TopFiveArticles,
        children: [
          {
            name: 'categoryArticles',
            path: 'articles'
          }
        ]
      }
    ]
  },
  {
    name: 'tags',
    path: '/tags',
    components: {
      header: Header,
      sidebar: Sidebar,
      content: Content
    },
    children: [
      {
        name: 'tagName',
        path: ':tagName',
        component: TopFiveArticles,
        children: [
          {
            name: 'tagArticles',
            path: 'articles'
          }
        ]
      }
    ]
  },
  {
    name: 'about',
    path: '/about',
    components: {
      header: Header,
      content: Content
    }
  },{
    name: 'allArticles',
    path: '/all-articles',
    components: {
      header: Header,
      sidebar: Sidebar,
      content: Content
    },
    children: [
      {
        path: '',
        component: AllFiveArticles
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

/**
 * 导航守卫主要用来通过跳转或取消的方式守卫导航
 * 全局前置守卫
 * 当一个导航触发时，全局前置守卫按照创建顺序调用。守卫是异步解析执行，此时导航在所有守卫 resolve 完之前一直处于 等待中。
 * to: Route: 即将要进入的目标路由对象
 * from: Route: 当前导航正要离开的路由
 * next: Function: 一定要调用该方法来 resolve 这个钩子。执行效果依赖 next 方法的调用参数。
 *   next():  进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是 confirmed (确认的)。
 *   next(false): 中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址。
 *   next('/') 或者 next({path: '/'}): 跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。你可以向 next 传递任意位置对象，且允许设置诸如 replace: true、name: 'home' 之类的选项以及任何用在 router-link 的 to prop 或 router.push 中的选项。
 *   next(error): (2.4.0+) 如果传入 next 的参数是一个 Error 实例，则导航会被终止且该错误会被传递给 router.onError() 注册过的回调。
 */

router.beforeEach((to, from, next) => {
  if (to.name !== 'about') {
    to.matched.forEach(record => console.log(`beforeEach:to.matched.forEach => ${to.name}.meta`,record.meta));
    console.log(`全局前置守卫 ${from.name}(${from.path}) 跳转至 ${to.name}(${to.path})`);
    next();
  } else {
    console.log('不允许跳转至 about');
    next(false);
  }

});

/**
 * 导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。
 */
router.beforeResolve((to, from, next) => {
  console.log(`全局解析守卫 beforeResolve: ${from.name} -> ${to.name}`);
  next();
});

router.afterEach((to, from) => {
  console.log(`全局后置守卫 afterEach: ${from.name} -> ${to.name}`);
});

/**
 * 完整的导航解析流程
 1. 导航被触发。
 2. 在失活的组件里调用离开守卫。
 3. 调用全局的 beforeEach 守卫。
 4. 在重用的组件里调用 beforeRouteUpdate 守卫 (2.2+)。
 5. 在路由配置里调用 beforeEnter。
 6. 解析异步路由组件。
 7. 在被激活的组件里调用 beforeRouteEnter。
 8. 调用全局的 beforeResolve 守卫 (2.5+)。
 9. 导航被确认。
 10. 调用全局的 afterEach 钩子。
 11. 触发 DOM 更新。
 12. 用创建好的实例调用 beforeRouteEnter 守卫中传给 next 的回调函数。
 */

export default router;
