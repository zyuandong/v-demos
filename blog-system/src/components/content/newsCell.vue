<template>
  <section class="financial-list">
    <section class="collect" @click="jumpPage">
      <aside>
        <h2>{{newsDate.title}}</h2>
        <section class="Cleft clearfix">
          <img src="./../../assets/icon/eyes.png" class="fl">
          <span class="fl">{{newsDate.author_name}}</span>
        </section>
        <section class="Cright">
          <img src="./../../assets/icon/clock.png">
          <span>{{newsDate.date | getYMD}}</span>
        </section>
        <div style="clear: both"></div>
      </aside>
      <aside>
        <img :src="newsDate.thumbnail_pic_s" style="border-radius: 0.2rem;">
      </aside>
      <div style="clear: both"></div>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'NewsCell',
    props: {
      newsDate: Object
    },
    data () {
      return {
      }
    },
    computed: {
    },
    methods: {
      jumpPage() {
        window.location.href = this.newsDate.url
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .financial-list {
    background-color: #fff;
    padding: 0.28rem 0;
    border-bottom: 1px solid #ccc;

    .collect {
      width: 80%;
      margin: 0 auto;

      aside {

        .Cleft {
          width: 45%;
          float: left;
          margin-top: 4rem;

          span {
            display: block;
            //width: 1.4rem;
            margin-left: 1.5rem;
            white-space: nowrap;
            -ms-text-overflow: ellipsis;
            text-overflow: ellipsis;
            overflow: hidden;
          }
        }

        .Cright {
          width: 55%;
          float: right;
          margin-top: 4rem;

          span {
            display: block;
            margin: 0 0 0 1rem;
          }
        }

        span {
          font-size: 0.2rem;
          color: #999;
        }

        img {
          float: left;
          height: 0.8rem;
          margin-top: 0.09rem;
        }
      }

      aside:nth-of-type(1) {
        width: 63%;
        float: left;
      }

      aside:nth-of-type(2) {
        width: 20%;
        //height: 2rem;
        float: left;
        margin-left: 3rem;

        img {
          width: 100%;
          height: 100%;
        }
      }

      h2 {
        width: 100%;
        //height: 0.96rem;
        color: #333;
        //line-height: 0.48rem;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }
    }
  }

</style>
