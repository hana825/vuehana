<template>
  <div class="mail-form">
    <input v-model="from" :class="{ 'is-invalid': (isFormSubmitted && !isValid(from)) }" type="text" placeholder="* From"/>
    <input v-model="to" :class="{ 'is-invalid': (isFormSubmitted && !isValid(to)) }" type="text" placeholder="* To"/>
    <textarea v-model="message" :class="{ 'is-invalid': (isFormSubmitted && !isValid(message)) }" rows="5" placeholder="* Message"></textarea>
    <input v-model="email" :class="{ 'is-invalid': (isFormSubmitted && !isValid(email)) }" type="email" placeholder="Your Email address" />
    <button @click="submitForm">send mail</button>
  </div>
</template>

<script>
import { ref } from "vue";
import emailjs from "emailjs-com";

export default {
  props: {
    closeModal: Function,
  },
  setup(props) {
    const from = ref("");
    const to = ref("");
    const email = ref("");
    const message = ref("");
    const isFormSubmitted = ref(false);

    const service_id = "service_upr8233";
    const template_id = "template_19ji81g";
    const user_id = "En7xiBgzyiJ2tmX6T";

    function isValid(value) {
      return value.trim().length > 0;
    }

    function submitForm() {
      isFormSubmitted.value = true;

      if (!isValid(from.value) || !isValid(to.value) || !isValid(message.value) || !isValid(email.value)) {
        alert("다 입력해주세요~~!");
        return;
      }

      const templateParams = {
        from_name: from.value,
        to_name: to.value,
        from_email: email.value,
        message: message.value,
      };

      emailjs
        .send(service_id, template_id, templateParams, user_id)
        .then(({ status }) => {
          if (status === 200) {
            alert("전송되었습니다!");
            props.closeModal();
          } else {
            alert("전송에 실패했습니다!");
          }
        })
        .catch(() => {
          alert("에러발생!!!!!");
        });
    }

    return {
      email,
      message,
      to,
      from,
      submitForm,
      isValid,
      isFormSubmitted
    };
  },
};
</script>
<style scoped lang="scss">
@import "@/assets/css/common.scss";

.mail-form {
  padding-bottom: 10px;

  input, textarea {
    border: 1px solid $e-gray-color;
    padding: 6px 8px;
    border-radius: 4px;
  }

  textarea {
    resize: vertical;
  }

  .is-invalid {
    border: 2px solid $main-color;
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
}
</style>