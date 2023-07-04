<template>
  <div :class="{ 'dark-theme': isDarkTheme }">
    <input type="checkbox" id="toggle" hidden />
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
  box-shadow: 0 0 16px 3px rgba(0, 0, 0, 0.15);
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

  #toggle:checked ~ .toggleSwitch {
    background: #3c4043;

    .toggleButton {
      left: calc(100% - 44px);
      background: #fff;
    }
  }

  &,
  .toggleButton {
    transition: all 0.2s ease-in;
  }
}

.dark-theme {
  background-color: #333;
  color: #fff;
}
</style>
