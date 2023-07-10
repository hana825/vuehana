<script>
import KakaoLogin from "@/components/KakaoLogin.vue";
import GoogleLogin from "@/components/GoogleLogin.vue";
import NaverLogin from "@/components/NaverLogin.vue";
export default {
  components: {
    KakaoLogin,
    GoogleLogin,
    NaverLogin,
  },
};
</script>
<template>
  <KakaoLogin />
  <GoogleLogin />
  <NaverLogin />
</template>
