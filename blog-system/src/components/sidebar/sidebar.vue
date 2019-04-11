<template>
  <nav id="sidebar">
    <transition name="fade" mode="out-in">
      <Home v-if="isHome"></Home>
      <Categories v-if="isCategories"></Categories>
      <Tags v-if="isTags"></Tags>
    </transition>
  </nav>
</template>

<script>
  import Home from './home.vue';
  import Categories from './categories.vue';
  import Tags from './tags.vue';

  export default {
    components: {
      Home,
      Categories,
      Tags,
    },
    computed: {
      isHome() {
        let path = this.$route.path;
        return path.includes('home') || (
          path.includes('articles') &&
          !path.includes('categories') &&
          !path.includes('tags'));
      },
      isCategories() {
        return this.$route.path.includes('categories');
      },
      isTags() {
        return this.$route.path.includes('tags');
      }
    },
    beforeRouteUpdate (to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      console.log(`sidebar 组件内守卫 beforeRouteUpdate ${from.name} -> ${to.name}`);
      next();
    }
  }
</script>