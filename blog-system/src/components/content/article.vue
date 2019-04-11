<template>
  <section id="article">
    <pre>{{JSON.stringify(article, null, 2)}}</pre>
  </section>
</template>

<script>
  import api from './../../axios/api';

  export default {
    data() {
      return {
        article: null
      }
    },
    created() {
      this.getArticle();
    },
    methods: {
      getArticle() {
        api.JH_news('/article/articleId', 'type=article&key=123456')
          .then(response => {
            console.log(response.data)
            this.article = response.data;
          })
      }
    },
    beforeRouteEnter(to, from, next) {
      //this.getArticle();
      next();
    },
    beforeRouteUpdate(to, from, next) {
      this.getArticle();
      console.log(`article 组件内守卫 beforeRouteUpdate ${from.name} -> ${to.name}`);
      next();
    }
  }
</script>