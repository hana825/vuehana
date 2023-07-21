<template>
  <div>
    <input v-model="email" type="email" placeholder="Email address" />
    <input v-model="subject" type="text" placeholder="Subject" />
    <textarea v-model="message" rows="5" placeholder="Message"></textarea>
    <button @click="sendEmail">Send Email</button>
  </div>
</template>

<script>
import { ref } from "vue";
import emailjs from "emailjs-com";

export default {
  setup() {
    const email = ref("");
    const subject = ref("");
    const message = ref("");

    const service_id = "service_upr8233";
    const template_id = "template_19ji81g";
    const user_id = "En7xiBgzyiJ2tmX6T";

    function sendEmail() {
      const templateParams = {
        from_email: email.value,
        to_email: "hana825@naver.com",
        subject: subject.value,
        message: message.value,
      };

      emailjs
        .send(service_id, template_id, templateParams, user_id)
        .then(({ status }) => {
          if (status === 200) {
            alert("Email sent successfully!");
          } else {
            alert("Failed to send email. Please try again later.");
          }
        })
        .catch(() => {
          alert("An error occurred. Please try again later.");
        });
    }

    return {
      email,
      subject,
      message,
      sendEmail,
    };
  },
};
</script>
