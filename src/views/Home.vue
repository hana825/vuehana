<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      welcomeText: "WELCOME to vuehana",
    };
  },
};
</script>

<template>
  <div class="home">
    <img alt="" src="../assets/img/cat.png" />
    <HelloWorld :msg="welcomeText" />
  </div>
</template>

<style lang="scss">
.home {
  img {
    object-fit: contain;
    width: 150px;
    height: 150px;
  }
}
</style>
