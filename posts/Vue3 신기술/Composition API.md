# Composition API

---

> Vue3의 가장 큰 특징이라고 할 수 있는 `Composition API`가 등장함에 따라 **함수형 프로그래밍 기반의 코드 템플릿의 변화**가 일어났다.

### 대표적인 변경 사항

- `setup()` 메서드 : 기존 컴포넌트 옵션들을 `setup()` 메서드 내에 선언 및 반환한다. 데이터에 반응형을 부여하는 `ref()` 및 `reactive()`, `watch()` 모두 API 메서드들로 대체되었다.
- `props` : this 바인딩을 하던 방식에서, `setup()`의 첫 번째 인자로 받아 내부에서 활용할 수 있다.
- `emit` : this 바인딩을 하던 방식에서, `setup()`의 두 번째 인자인 `context`에 포함되어 있다.
- Lifecycle Hooks : `beforeCreate`, `created`가 `setup()`으로 대체된다. 또, hooks 앞에 `on`들이
  붙었으며 `destroy`는 `unmount`로 변경되었다.

&nbsp;

## Composition API 란?

> [Composition API](https://ko.vuejs.org/guide/extras/composition-api-faq.html)는 **컴포넌트 내에서 사용하는 코드구조를 유연하게 구성**하여 사용할 수 있도록 Vue3 버전에서 추가된 **함수 기반의 API** 이다.  
> _(Vue2에서는 Options 문법을 사용)_

Options 에서 data, computed, methods 등 데이터의 변화에 관련된 로직이 각각 흩어져 있다면,  
Composition API는 `setup()`이라는 메서드 안에서 이들을 그룹핑하므로 **데이터의 흐름을 쉽게 파악하고 유지보수가 용이**해진다.  
&nbsp;
또한, 반복되는 코드들을 별도의 hooks로 모듈화하고 컴포넌트 내에서 import해서 사용할 수 있기 때문에 코드의 재사용성 면에서도 유리한 문법이다.  
Vue2의 `mixin`으로 컴포넌트 로직을 어느정도 재사용할 수 있었지만, 오버라이딩이나 다중 믹스인을 상속하면 컴포넌트 관리가 어려워지는 단점들이 존재한다.

### 예시

basic counter component without using Composition API :

```
<!-- Counter.vue -->
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>
```

refactor the code to use Composition API and create reusable hook for the counter logic :

```
<!-- Counter.vue -->
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import useCounter from './useCounter';

export default {
  setup() {
    const { count, increment, decrement } = useCounter();

    return {
      count,
      increment,
      decrement,
    };
  },
};
</script>
```

create the `useCounter` hook in a separate file :

```
// useCounter.js
import { ref } from 'vue';

export default function useCounter() {
  const count = ref(0);

  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  return {
    count,
    increment,
    decrement,
  };
}
```

counter와 같은 기능이 필요한 다른 컴포넌트에 `import`해서 `useCounter`를 사용할 수 있다.
