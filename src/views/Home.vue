<template>
  <div class="home">
    <img alt="" src="../assets/img/cat.png" />
    <HelloWorld :msg="welcomeText" />
    <button @click="isOpen = true">주인장에게 전할 말..</button>
    <Teleport to="body">
      <div v-if="isOpen" class="modal">
        <div>
          <div>
            <button @click="isOpen = false">X</button>
          </div>
          <SendEmail />
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script>
import HelloWorld from "@/components/HelloWorld.vue";
import SendEmail from "@/components/SendEmail.vue";
import { ref } from "vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    SendEmail,
  },
  setup() {
    const welcomeText = "WELCOME to vuehana";
    const isOpen = ref(false);

    return {
      welcomeText,
      isOpen,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/css/common.scss";

.home {
  img {
    object-fit: contain;
    width: 150px;
    height: 150px;
  }
}

  button {
    margin-top: 10px;
    background-color: $f5-gray-color;
    border: 1px solid $f5-gray-color;
    border-radius: 4px;
    color: $dark-gray-color;
    padding: 8px 16px;
    cursor: pointer;
  }
  button:hover {
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    background-color: $f5-gray-color;
    border: 1px solid $light-gray-color;
    color: $dark-gray-color;
  }

.modal {
  display: block;
  position: fixed;
  z-index: 9;
  top: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: brightness(0.5);
  
  > div {
    transform: translate(0%, 50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
    margin: auto;
    background-color: #fff;
    gap: 10px;
    padding: 8px 0;
    border-radius: 10px;

    div:first-of-type {
      display: flex;
      width: calc(100% - 20px);
      align-items: flex-end;
  
      button {
        background-color: $f5-gray-color;
        border: 1px solid $f5-gray-color;
        border-radius: 4px;
        color: $dark-gray-color;
        padding: 8px 16px;
        cursor: pointer;
      }
      button:hover {
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
        background-color: $f5-gray-color;
        border: 1px solid $light-gray-color;
        color: $dark-gray-color;
      }
    }

    > div {
      background-color: #fff;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
}
</style>
