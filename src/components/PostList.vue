<template>
  <div class="postlist" v-for="(post, i) in posts" :key="`post${i}`">
    <button :class="{ selected: post === selectedPost }" @click="emitPostClicked(post)">{{ post.title }}</button>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true,
    },
    selectedPost: {
      type: Object,
      required: true,
    },
  },
  methods: {
    emitPostClicked(post) {
      this.$emit("post-clicked", post);
      // console.log("Clicked post:", post);
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
  .selected {
    text-decoration: underline;
    font-weight: 600;
    color: #42b983 !important;
  }
  button:hover {
    text-decoration: underline;
  }
}
</style>
