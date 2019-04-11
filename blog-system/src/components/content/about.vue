<template>
  <section id="about">
    <h1>about</h1>
    <p>{{aboutMsg}}</p>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        aboutMsg: 'I\'m about component'
      }
    }
  }
</script>