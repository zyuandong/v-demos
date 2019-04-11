<template>
  <section id="articles">
    <h6>all articles</h6>

    <div v-for="(item, key) in newsListShow">
      <news-cell
        :newsDate="item"
        :key="key"
      ></news-cell>
    </div>

  </section>
</template>

<script>
  import api from './../../axios/api.js';
  import NewsCell from './newsCell.vue';

  export default {
    name: 'index',
    data() {
      return {
        newsListShow: [],
      }
    },
    components: {
      NewsCell,
    },
    created() {
      console.log(`========== created() =============== `);
      this.setNewsApi();
    },
    methods: {
      setNewsApi() {
        // api.JH_news是我封装的axios函数
        api.JH_news('/news/index', 'type=top&key=123456')
          .then(res => {
            console.log(res);
            this.newsListShow = res.articles;
          });
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
