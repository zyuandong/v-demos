<template>
  <section id="top-five">
    Top 5 Articles
    <pre>{{JSON.stringify(topFiveArticles, null, 2)}}</pre>
  </section>
</template>

<script>
  import api from './../../axios/api.js';

  export default {
    data() {
      return {
        topFiveArticles: []
      }
    },
    created() {
      console.log(`========== created() =============== `);
      this.getTopFiveArticles()
    },
    methods: {
      getTopFiveArticles() {
        api.JH_news('/articles/top-five', 'type=top-five&key=123456')
          .then(response => {
            console.log(response);
            this.topFiveArticles = response.data;
          })
      }
    }
  }
</script>
