<template>
  <section id="sidebar-home">
    <ul>
      <li>
        <router-link
          :to="{name:'article', params:{articleId:1}}">article-1</router-link>
      </li>
      <li>
        <router-link
          :to="{name:'article', params:{articleId:2}}">article-2</router-link>
      </li>
      <li>
        <router-link
          :to="{name:'article', params:{articleId:3}}">article-3</router-link>
      </li>
    </ul>
  </section>
</template>