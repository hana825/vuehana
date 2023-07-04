<template>
  <VueWriter :array="[msg]" />
</template>

<script>
import VueWriter from "vue-writer";

export default {
  components: { VueWriter },
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/css/common.scss";

@font-face {
  font-family: "DungGeunMo";
  src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.2/DungGeunMo.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}

.is-typed {
  span.typed {
    font-family: "DungGeunMo";
    font-size: 30px;
    color: $black-color;
  }

  span.cursor {
    display: inline-block;
    width: 3px;
    background-color: $black-color;
    animation: blink 1s infinite;
  }

  span.underscore {
    display: inline-flex;
    width: 10px;
    height: 1px;
    align-items: flex-end;
    background-color: $black-color;
    animation: blink 1s infinite;
  }

  span.cursor.typing {
    animation: none;
  }
}

@keyframes blink {
  49% {
    background-color: $black-color;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}
</style>
