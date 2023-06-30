<template>
  <div class="hello">
    <h1 @click="showConfetti">{{ msg }}</h1>
  </div>
</template>

<script>
import JSConfetti from "js-confetti";
const confetti = new JSConfetti();

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
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

<style></style>
