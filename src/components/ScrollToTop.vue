<template>
  <span class="scrollTop" @click="scrollToTop">
    <font-awesome-icon :icon="faArrowUp" />
  </span>
</template>

<script>
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
export default {
  data() {
    return {
      faArrowUp: faArrowUp,
    };
  },
  methods: {
    scrollToTop() {
      const postsBody = document.querySelector(".posts-body");
      if (postsBody) {
        postsBody.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    },
  },
};
</script>

<style>
span.scrollTop {
  position: fixed;
  bottom: 20px;
  right: 30px;
  padding: 10px;
  font-size: 20px;
  color: #fff;
  background-color: #42b983;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>
