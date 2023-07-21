<template>
  <div class="home">
    <img alt="" src="../assets/img/cat.png" />
    <HelloWorld :msg="welcomeText" />
    <button @click="isOpen = true">send mail</button>
    <Teleport to="body">
      <div v-if="isOpen" class="modal">
        <div>
          <button @click="isOpen = false">X</button>
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
.home {
  img {
    object-fit: contain;
    width: 150px;
    height: 150px;
  }
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

    > div {
      background-color: #fff;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
}
</style>
