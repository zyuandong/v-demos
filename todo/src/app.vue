<template>
  <div id="app">
    <div id="cover"></div>
    <Header></Header>
    <todo></todo>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './templates/header.vue';
import Footer from './templates/footer.jsx';
import Todo from './templates/todo.vue';


export default {
  components: {
    Header,
    Footer,
    Todo,
  }
}
</script>

<style lang="stylus" scoped>
#app {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
#cover {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(200, 200, 200, 0.5);
  z-index: -1;
}
</style>