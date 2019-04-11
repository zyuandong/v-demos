<template>
  <section id="sidebar-tags">
    <ul>
      <li>
        <router-link
          :to="{name:'tagArticles', params:{tagName:'javascript'}}"
        >JavaScript</router-link>
      </li>
      <li>
        <router-link
          :to="{name:'tagArticles', params:{tagName:'typescript'}}"
        >TypeScript</router-link>
      </li>
      <li>
        <router-link
          :to="{name:'tagArticles', params:{tagName:'java'}}"
        >Java</router-link>
      </li>
      <li>
        <router-link
          :to="{name:'tagArticles', params:{tagName:'python'}}"
        >Python</router-link>
      </li>
    </ul>
  </section>
</template>