<template>
  <header id="header">
    <h1 class="left" @click="say">path: {{$route.path}}</h1>
    <ul class="right">
      <li><router-link to="/home">home</router-link></li>
      <li><router-link to="/categories">categories</router-link></li>
      <li><router-link to="/tags">tags</router-link></li>
      <li><router-link to="/about">about</router-link></li>
      <li><a>search</a></li>
    </ul>
  </header>
</template>

<script>
  export default {
    methods: {
      /**
       * this.$route - 当前路由
       * this.$router - 路由器
       */
      say() {
        return console.log(this.$route, this.$router);
      }
    },
    beforeRouteEnter (to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
      console.log(`组件内守卫 beforeRouteEnter ${from.name} -> ${to.name}`);
      next(vm => {
        console.log('next:vm:',vm);
        console.error('================= 分界线 ==================');
      })
    },
    beforeRouteUpdate (to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      console.log(`组件内守卫 beforeRouteUpdate ${from.name} -> ${to.name}`);
      next();
    },
    beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 通常用来禁止用户在还未保存修改前突然离开
      // 可以访问组件实例 `this`
      console.log(`组件内守卫 beforeRouteLeave ${from.name} -> ${to.name}`);
      next();
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        //this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        console.log(`pathDepth: ${toDepth}, childrenPathDepth: ${fromDepth}`);
      }
    }
  }
</script>
