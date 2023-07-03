<template>
  <div v-html="renderedContent"></div>
</template>

<script>
import MarkdownIt from "markdown-it";
import mdHighlightjs from "markdown-it-highlightjs";
import hljs from "highlight.js";

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
      md.use(mdHighlightjs, { hljs });
      return md.render(this.content);
    },
  },
};
</script>
