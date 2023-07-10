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

<!-- <template>
  <div>
    <h1>{{ isLoggedIn.value ? "Welcome " + userName : "Login Page" }}</h1>
    <GoogleLogin :callback="handleLogin" prompt="select_account" />
    <div v-if="isLoggedIn.value" @click="handleLogout">Logout</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { decodeCredential, googleLogout } from "vue3-google-login";

const isLoggedIn = ref(false);
const userName = ref("");

const handleLogin = (response) => {
  console.log("Login response:", response);
  const userData = decodeCredential(response.credential);
  console.log("Decoded user data:", userData);

  // 이미 로그인 되었는지 체크
  if (userData && userData.sub) {
    isLoggedIn.value = true;
    userName.value = userData.name;
  } else {
    isLoggedIn.value = false;
  }
};

const handleLogout = () => {
  isLoggedIn.value = false;
  userName.value = "";
  googleLogout();
};
</script> -->

<template>
  <div>
    <h1>{{ isLoggedIn ? "Welcome " + userName : "Login Page" }}</h1>
    <GoogleLogin :clientId="clientId" :scope="scope" @success="handleLogin" @failure="handleLoginFailure" buttonText="Login with Google" />
    <div v-if="isLoggedIn" @click="handleLogout">Logout</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useGoogleLogin } from "vue3-google-login";

const isLoggedIn = ref(false);
const userName = ref("");

const clientId = "YOUR_GOOGLE_CLIENT_ID";
const scope = "email profile openid";

const { signIn, prompt } = useGoogleLogin({
  clientId,
  scope,
  onRequestSuccess: (response) => {
    console.log("Login response:", response);
    const userData = response.profileObj;
    console.log("User data:", userData);

    if (userData && userData.email) {
      isLoggedIn.value = true;
      userName.value = userData.name;
    } else {
      isLoggedIn.value = false;
    }
  },
  onRequestFailure: (error) => {
    console.error("Login error:", error);
  },
});

const handleLogin = () => {
  signIn(prompt);
};

const handleLogout = () => {
  isLoggedIn.value = false;
  userName.value = "";
};
</script>
