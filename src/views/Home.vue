<script>
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<template>
  <div class="home">
    <img alt="" src="../assets/cat.png" />
    <HelloWorld msg="WELCOME" />
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
