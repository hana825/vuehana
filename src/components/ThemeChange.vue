<template>
  <div :class="{ 'dark-theme': isDarkTheme }">
    <input type="checkbox" id="toggle" v-model="isDarkTheme" hidden />
    <label for="toggle" class="toggleSwitch">
      <span class="toggleButton"></span>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isDarkTheme: false,
    };
  },
  watch: {
    isDarkTheme(newVal) {
      document.body.dataset.theme = newVal ? "dark" : "light";
    },
  },
  mounted() {
    let theme = document.body.dataset.theme;
    if (!theme) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        theme = "dark";
      } else {
        theme = "light";
      }
      document.body.dataset.theme = theme;
    }
    this.isDarkTheme = theme === "dark";
  },
};
</script>

<style lang="scss">
.toggleSwitch {
  width: 100px;
  height: 50px;
  display: block;
  position: relative;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 0 0 16px 3px rgba(0 0 0 / 15%);
  cursor: pointer;
  margin: 30px;

  .toggleButton {
    width: 40px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 4px;
    transform: translateY(-50%);
    border-radius: 50%;
    background: #ccc;
  }
}

#toggle:checked ~ .toggleSwitch {
  background: #333;

  .toggleButton {
    left: calc(100% - 44px);
    background: #fff;
  }
}

.toggleSwitch,
.toggleButton {
  transition: all 0.2s ease-in;
}

// .dark-theme {
//   --main-color: $main-color-dark;
//   --navy-color: $navy-color-dark;
//   --black-color: $black-color-dark;
//   --dark-gray-color: $dark-gray-color-dark;
//   --gray-color: $gray-color-dark;
//   --a-gray-color: $a-gray-color-dark;
//   --e-gray-color: $e-gray-color-dark;
//   --f5-gray-color: $f5-gray-color-dark;
//   --f3-gray-color: $f3-gray-color-dark;
//   --light-gray-color: $light-gray-color-dark;
//   --almost-white-color: $almost-white-color-dark;
//   --white-color: $white-color-dark;
// }
</style>
