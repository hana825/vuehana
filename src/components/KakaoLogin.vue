<template>
  <div class="kakao-login-container">
    <a id="custom-login-btn" @click="kakaoLogin()">
      <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222" alt="카카오 로그인 버튼" />
    </a>
    <div id="token-result">{{ tokenResult }}</div>
    <div @click="kakaoLogout()">로그아웃</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tokenResult: "",
    };
  },
  mounted() {
    this.displayToken();
  },
  methods: {
    kakaoLogin() {
      window.Kakao.Auth.login({
        scope: "profile_image, account_email",
        success: this.getKakaoAccount,
      });
    },
    getKakaoAccount() {
      window.Kakao.API.request({
        url: "/v2/user/me",
        success: (res) => {
          const kakao_account = res.kakao_account;
          // const nickname = kakao_account.profile.nickname;
          const email = kakao_account.email;
          // console.log("nickname", nickname);
          console.log("email", email);

          //로그인처리구현

          alert("로그인 성공!");
        },
        fail: (error) => {
          console.log(error);
        },
      });
    },
    displayToken() {
      const token = this.getCookie("authorize-access-token");

      // if (token) {
      //   window.Kakao.Auth.setAccessToken(token);
      //   window.Kakao.Auth.getStatusInfo()
      //     .then((res) => {
      //       if (res.status === "connected") {
      //         this.tokenResult = "login success, token: " + window.Kakao.Auth.getAccessToken();
      //       }
      //     })
      //     // .catch(() => {
      //     //   window.Kakao.Auth.setAccessToken(null);
      //     // });
      //     .catch((err) => {
      //       console.log(err);
      //       this.clearToken();
      //     });
      // }
      if (token) {
        window.Kakao.Auth.setAccessToken(token);
        window.Kakao.Auth.getStatusInfo({
          success: (res) => {
            if (res.status === "connected") {
              this.tokenResult = "login success, token: " + window.Kakao.Auth.getAccessToken();
            }
          },
          fail: () => {
            window.Kakao.Auth.setAccessToken(null);
          },
        });
      }
    },
    getCookie(name) {
      const parts = document.cookie.split(name + "=");
      if (parts.length === 2) {
        return parts[1].split(";")[0];
      }
    },
    kakaoLogout() {
      // window.Kakao.Auth.logout((res) => {
      //   console.log(res);
      //   // 쿠키 제거하기
      //   this.deleteCookie();
      // });
      // 연결 끊기
      window.Kakao.API.request({
        url: "/v1/user/unlink",
        success: function (response) {
          console.log(response);
          alert("로그아웃 되었습니다");
        },
        fail: function (error) {
          console.log(error);
        },
      });
    },
    deleteCookie() {
      document.cookie = "authorize-access-token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    },
  },
};
</script>
<style scoped lang="scss">
.kakao-login-container {
  a,
  div {
    cursor: pointer;
  }
}
</style>
