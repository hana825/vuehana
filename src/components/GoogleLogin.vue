<script setup>
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
</template>
