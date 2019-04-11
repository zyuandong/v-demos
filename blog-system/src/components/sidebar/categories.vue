<template>
  <section id="sidebar-categories">
    <ul>
      <li>
        <router-link
          :to="{name:'categoryArticles', params:{categoryName:'fe'}}"
        >FE</router-link>
      </li>
      <li>
        <router-link
          :to="{name:'categoryArticles', params:{categoryName:'be'}}"
        >BE</router-link>
      </li>
      <li>
        <router-link
          :to="{name:'categoryArticles', params:{categoryName:'free'}}"
        >free</router-link>
      </li>
    </ul>
  </section>
</template>