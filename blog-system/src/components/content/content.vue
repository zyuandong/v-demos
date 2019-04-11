<template>
  <section id="content">
    <!--<TopFive v-if="isFree || (isTopFive && !isArticle && !isArticles)"></TopFive>
    <About v-if="isFree || isAbout"></About>
    <Article v-if="isFree || isArticle"></Article>
    <Articles v-if="isFree || (isArticles && !isArticle)"></Articles>-->
    <!--<Articles></Articles>-->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
  import TopFiveArticles from './topFiveArticles.vue';
  import About from './about.vue';
  import Article from './article.vue';
  import AllArticles from './allArticles.vue';

  export default {
    components: {
      TopFiveArticles,
      About,
      Article,
      AllArticles,
    },
    computed: {
      isTopFive() {
        return this.$route.path.includes('home');
      },
      isArticle() {
        return this.$route.params.articleId;
      },
      isArticles() {
        return this.$route.path.includes('articles');
      },
      isAbout() {
        return this.$route.path.includes('about');
      },
      isFree() {
        let path = this.$route.path;
        return path.includes('categories') || path.includes('tags');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s ease;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
  .child-view {
    position: absolute;
    transition: all .5s cubic-bezier(.55,0,.1,1);
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(30px, 0);
    transform: translate(30px, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-30px, 0);
    transform: translate(-30px, 0);
  }
</style>
