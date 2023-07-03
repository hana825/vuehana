<template>
  <div class="postlist" v-for="(post, i) in posts" :key="`post${i}`">
    <button @click="emitPostClicked(post)">{{ post.title }}</button>
  </div>
</template>

<script>
import posts from "@/utils/posts";

export default {
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.posts = posts;
  },
  methods: {
    emitPostClicked(post) {
      this.$emit("post-clicked", post);
      console.log("Clicked post:", post);
    },
  },
  emits: ["post-clicked"],
};
</script>

<style lang="scss">
.postlist {
  button {
    cursor: pointer;
    width: 100%;
    outline: none;
    border: none;
    padding: 6px 0;
    background-color: transparent;
  }
  button:hover {
    text-decoration: underline;
  }
}
</style>
