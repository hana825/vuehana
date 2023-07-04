<template>
  <header>
    <router-link to="/" class="title">
      <img src="../src/assets/img/logo.png" />
      vuehana
    </router-link>
  </header>
  <div id="app">
    <div id="nav">
      <!-- 네비게이션을 위해 router-link 컴포넌트를 사용한다 -->
      <!-- 구체적인 속성은 `to` prop을 이용한다 -->
      <!-- 기본적으로 `<router-link>` 는 `<a>`태그로 렌더링된다 -->
      <router-link to="/" @click="showConfetti">Home</router-link> | <router-link to="/about">About</router-link> | <router-link to="/todo">Todo</router-link> |
      <router-link to="/posts">Posts</router-link>
    </div>
    <!-- 라우트 아울렛 -->
    <!-- 현재 라우트에 맞는 컴포넌트가 렌더링된다 -->
    <router-view />
  </div>
</template>

<script>
import JSConfetti from "js-confetti";
const confetti = new JSConfetti();

export default {
  mounted() {
    this.showConfetti();
  },
  methods: {
    showConfetti() {
      confetti.addConfetti();
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/common.scss";
body {
  margin: 0;
  padding: 0;
  height: 100vh;
  overflow: hidden;
}

header {
  display: flex;
  width: 100%;
  align-items: center;
  .title {
    text-decoration: none;
    color: #42b983;
    font-size: 40px;
    font-weight: 600;
    display: flex;
    align-items: center;
  }
}

::selection {
  background-color: #42b983;
  color: #fff;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  justify-content: center;
  > div:last-of-type {
    height: calc(100% - 80px);
  }
}

#nav {
  // padding: 30px;
  position: sticky;
  top: 0;
  width: 100%;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  gap: 10px;
  // box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
