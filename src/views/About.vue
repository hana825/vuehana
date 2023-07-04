<template>
  <div class="about">
    <h2>This Site is for practicing Vue.</h2>
    <p>
      documentations below:<br />
      <a href="https://ko.vuejs.org/" target="_blank" rel="noopener">vue3 korean doc</a><br />
      <a href="https://vuejs.org/" target="_blank" rel="noopener">vue3 english doc</a><br />
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli doc</a>
    </p>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/css/common.scss";

ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: $main-color;
}
</style>
