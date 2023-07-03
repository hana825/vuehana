# typing effect

---

- ### 했다가 안된 플러그인들

  `vue-typewriter`,
  `vue-typewriter-effect`,
  `vue-typed-js`

  플러그인은 `vue-writer` 가 되었다.

- ### 플러그인 사용하지 않고 만드는 법

```
<template>
  <div class="hello">
    <h1>{{ animatedText }}</h1>
  </div>
</template>

<script>
 import { ref, watchEffect } from "vue";

 export default {
   name: "HelloWorld",
   props: {
     msg: String,
   },
   setup(props) {
     const animatedText = ref("");
     const typingSpeed = ref(100);
     const delay = ref(1000);

     watchEffect(() => {
       let index = 0;
       const intervalId = setInterval(() => {
         animatedText.value = props.msg.substring(0, index + 1);
         index++;
         if (index === props.msg.length) {
           clearInterval(intervalId);
           setTimeout(() => {
             animatedText.value = "";
             index = 0;
             startTyping();
           }, delay.value);
         }
       }, typingSpeed.value);
     });

     function startTyping() {
       const intervalId = setInterval(() => {
         animatedText.value = props.msg.substring(0, animatedText.value.length + 1);
         if (animatedText.value === props.msg) {
           clearInterval(intervalId);
           setTimeout(() => {
             animatedText.value = "";
             startTyping();
           }, delay.value);
         }
       }, typingSpeed.value);
     }

     startTyping();

     return {
       animatedText,
     };
   },
 };
</script>
```
