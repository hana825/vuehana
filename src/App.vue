<template>
  <div id="app">
    <div id="nav">
      <!-- 네비게이션을 위해 router-link 컴포넌트를 사용한다 -->
      <!-- 구체적인 속성은 `to` prop을 이용한다 -->
      <!-- 기본적으로 `<router-link>` 는 `<a>`태그로 렌더링된다 -->
      <router-link to="/">Home</router-link> | <router-link to="/about">About</router-link> |
      <router-link to="/todo">Todo</router-link>
    </div>
    <!-- 라우트 아울렛 -->
    <!-- 현재 라우트에 맞는 컴포넌트가 렌더링된다 -->
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
