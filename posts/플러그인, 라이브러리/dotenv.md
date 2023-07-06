# dotenv

---

> ### dotenv 가 무엇인가?
>
> [_dotenv_](https://www.npmjs.com/package/dotenv) is a zero-dependency module that loads environment variables from a `.env` file into `process.env`. Storing configuration in the environment separate from code is based on **The Twelve-Factor App** methodology.

### dotenv 설치

```
npm i dotenv
```

&nbsp;

### dotenv 사용

`main.js` 에 아래와 같은 코드로 설정해준다.
`dotenv.config()` 는 `.env` 파일에서 환경 변수를 로드하고 `process.env` 를 통해 액세스할 수 있도록 한다.

```
import dotenv from "dotenv";
dotenv.config();
```

&nbsp;

### .gitignore

깃에 올리면 안되니깐.. `.gitignore`에 `.env` 파일을 추가해준다.

```
# local env files
.env
.env.local
.env.*.local=
```

&nbsp;

&nbsp;

이렇게만 했더니 자꾸 오류가 떠서...

`vue.config.js` 코드를 갈아 엎어버렸다!

---

### vue.config.js

```
const Dotenv = require("dotenv-webpack");
const { ProvidePlugin } = require("webpack");
```

- `dotenv-webpack`과 `webpack` 패키지에서 각각 `dotenv-webpack`과 `ProvidePlugin` 모듈을 가져온다.
  `dotenv-webpack`은 `.env` 파일에서 환경 변수를 로드하는데 사용되고,  
  `ProvidePlugin`은 글로벌 변수와 모듈을 제공하는 데 사용된다.

&nbsp;

```
module.exports = {
  transpileDependencies: true,
  publicPath: "./",
  chainWebpack: (config) => {
    config.module.rule("md").test(/\.md$/).use("raw-loader").loader("raw-loader").end();
  },
```

- `vue.config.js` 파일에서 내보낸 기본 구성 개체이다.
  `transfileDependencies: true` : `true`는 `Babel`에 의해 `transfileDependencies`를 보장한다. 이 기능은 이전 브라우저를 지원하기 위해 이전 버전으로 변환해야 하는 종속성이 있는 경우에 유용하다.
  `publicPath: "./"` : 응용 프로그램의 모든 자산에 대한 기본 URL을 설정한다.
  `chainWebpack` : webpack 구성 객체(config)를 인수로 받는 함수이다. `webpack-chain API`를 사용하여 webpack 구성을 수정할 수 있다.

  &nbsp;

```
configureWebpack: {
  plugins: [
    new Dotenv(),
    new ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
      stream: require.resolve("stream-browserify"),
    }),
  ],
  resolve: {
    fallback: {
      path: require.resolve("path-browserify"),
      os: require.resolve("os-browserify/browser"),
      crypto: require.resolve("crypto-browserify"),
      stream: require.resolve("stream-browserify"),
    },
  },
},
};
```

- `configureWebpack` 은 `Vue CLI` 에서 사용하는 기본 webpack 구성에 대한 추가 구성 옵션을 제공할 수 있는 개체이다. 플러그인 배열에는 webpack 구성에 추가될 `Dotenv` 및 `ProvidePlugin` 플러그인의 인스턴스가 포함되어 있다.

  `Dotenv` : `.env` 파일에서 환경 변수를 로드하는 데 사용된다.  
   `ProvidePlugin` : 글로벌 변수 및 모듈을 제공하는 데 사용된다. 이 경우 process, Buffer 및 stream 변수에 대한 매핑을 제공하며 stream은 스트림 브라우저화 모듈을 사용하여 해결된다.  
   `resolve.fallback` : webpack 에서 자동으로 확인되지 않는 특정 모듈에 대한 폴백 확인을 제공한다. 각각의 브라우징 대안을 사용하여 path(경로), os, crypto(암호화) 및 stream 모듈을 해결한다.

플러그인을 추가하고 특정 모듈에 대한 모듈 해상도를 구성하여 `Vue.js` 프로젝트의 웹 팩 구성을 향상시키고, 원시 로더를 사용하여 .md 파일을 처리하는 규칙도 추가한다.

> 추가한 플러그인들 :
>
> [path-browserify](https://www.npmjs.com/package/path-browserify)  
> [os-browserify](https://www.npmjs.com/package/os-browserify)  
> [crypto-browserify](https://www.npmjs.com/package/crypto-browserify)  
> [stream-browserify](https://www.npmjs.com/package/stream-browserify)

&nbsp;

---

### 추가적으로 또 설치한 것들..

```
npm install dotenv-webpack --save-dev
npm install stream-browserify process path-browserify pbkdf2 randombytes randomfill readable-stream safer-buffer
```

&nbsp;

&nbsp;

해냈다.
