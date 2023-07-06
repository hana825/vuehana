# 카카오 API 키 노출 문제

---

카카오, 구글, 페이스북과 같은 `OAuth2` 인증 방식에서 클라이언트ID(앱 키)는 웹브라우저 같은 곳에서 일반적으로 노출될 수 있다.

하지만, 앱 키가 노출되어도 `developers`의 `플랫폼 설정 및 redirect uri` 를 올바르게 설정하고 사용하고 있다면 노출과 관련한 보안 문제가 일어날 일은 매우 낮다.

> 단, Admin 키 제외. Admin 키는 백엔드에서만 사용되기에 외부에 노출 되어서는 안된다.

[Kakao Developers](https://developers.kakao.com/terms/latest/ko/security_guideline)

&nbsp;

`kakao developers > 내애플리케이션 > 요약정보` 상단에 제공되는 키 중에서 Javascript 키는 프론트엔드에서 서비스를 호출하거나 카카오톡 로그인을 위해 어쩔 수 없이 노출되는 키이고, 어짜피 개발자가 허용한 사이트 도메인 외에선 작동하지 않기 때문에 누군가 수집해가도 쓸 수가 없다.

하지만 개발과정에서 localhost:3000 같은 것을 열어둔채로 프로덕션배포를 하는 경우가 많은데 잠재적인 쿼타 소진의 위험은 될 수 있다.
