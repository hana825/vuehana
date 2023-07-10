<!-- <script setup>
import { decodeCredential } from "vue3-google-login";

const callback = (response) => {
  // This callback will be triggered automatically
  // if one single Google account is already logged in
  console.log("Handle the response", response);

  // decodeCredential will retrive the JWT payload from the credential
  const userData = decodeCredential(response.credential);
  console.log("Handle the userData", userData);
};
</script>

<template>
  <GoogleLogin :callback="callback" prompt auto-login />
</template> -->

<template>
  <div>
    <h1>Login Page</h1>
    <GoogleLogin :callback="handleLogin" prompt="select_account" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import { decodeCredential } from "vue3-google-login";

const isLoggedIn = ref(false);

const handleLogin = (response) => {
  console.log("Login response:", response);

  // 이미 로그인 되었는지 체크
  if (response.isSignedIn) {
    isLoggedIn.value = true;
    const userData = decodeCredential(response.credential);
    console.log("Decoded user data:", userData);
    // 추가 처리 하거나 다른 페이지 이동..
  } else {
    isLoggedIn.value = false;
  }
};
</script>
