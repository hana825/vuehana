<template>
  <div class="naver-login-template">
    <img @click="handleNaverLogin" src="../../src/assets/img/naverLogin.png" width="210" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  setup() {
    const state = {
      naverClientId: "1kyB11QJ8TvrRLXOgTpA",
      naverClientSecret: "bp3EKombG8",
      callbackUrl: "http://localhost:8080/#/login",
      state: "",
      code: "",
    };

    const handleNaverLogin = () => {
      const url = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${state.naverClientId}&redirect_uri=${state.callbackUrl}&state=${state.state}`;
      window.location.href = url;
    };

    const getCodeFromCallbackUrl = () => {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      state.code = urlParams.get("code");

      if (state.code) {
        console.log("Authorization Code:", state.code);
        getAccessToken();
      }
    };

    const getAccessToken = async () => {
      try {
        const response = await axios.get(`https://nid.naver.com/oauth2.0/token`, {
          params: {
            grant_type: "authorization_code",
            client_id: state.naverClientId,
            client_secret: state.naverClientSecret,
            code: state.code,
            state: state.state,
          },
          headers: { "Access-Control-Allow-Origin": "http://localhost:8080/", "Access-Control-Allow-Credentials": "true" },
        });
        console.log("Access Token Response:", response.data);
        const accessToken = response.data.access_token;
        if (accessToken) {
          checkAccessToken(accessToken);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    const checkAccessToken = (token) => {
      axios
        .get("https://openapi.naver.com/v1/nid/me", {
          headers: { Authorization: `Bearer ${token}`, "Access-Control-Allow-Origin": "http://localhost:8080/", "Access-Control-Allow-Credentials": "true" },
        })
        .then((response) => {
          console.log("User Profile:", response.data);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    };

    getCodeFromCallbackUrl();

    return {
      handleNaverLogin,
    };
  },
};
</script>
<style scoped lang="scss">
.naver-login-template {
  img {
    cursor: pointer;
  }
}
</style>

<!-- <template>
  <div>
    <div id="naver_id_login"></div>
  </div>
</template>

<script>
export default {
  mounted() {
    const naver_id_login = new window.naver_id_login("xk1FLVI8K5MX2DZgusG5", "http://localhost:8080/#/login");
    const state = naver_id_login.getUniqState();
    naver_id_login.setButton("white", 2, 40); // 버튼 설정
    naver_id_login.setState(state);
    // naver_id_login.setPopup();
    naver_id_login.init_naver_id_login();
  },
};
</script> -->
