<script>
import KakaoLogin from "@/components/KakaoLogin.vue";
import GoogleLogin from "@/components/GoogleLogin.vue";
export default {
  components: {
    KakaoLogin,
    GoogleLogin,
  },
};
</script>
<template>
  <KakaoLogin />
  <GoogleLogin />
</template>
