<template>
  <div class="naver-login-template">
    <img @click="handleNaverLogin" src="../../src/assets/img/naverLogin.png" width="210" />
  </div>
</template>

<script>
export default {
  methods: {
    handleNaverLogin() {
      const url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=xk1FLVI8K5MX2DZgusG5&redirect_uri=https://hana825.github.io/vuehana/#/login&state=1234`;

      console.log(url);
      window.location.href = url;
    },
  },
};
</script>
<style scoped lang="scss">
.naver-login-template {
  img {
    cursor: pointer;
  }
}
</style>
