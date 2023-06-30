<template>
  <div v-html="renderedContent"></div>
</template>

<script>
import MarkdownIt from "markdown-it";
// import showdown from "showdown";

export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  computed: {
    renderedContent() {
      const md = new MarkdownIt();
      return md.render(this.content);
    },
  },
};
</script>
