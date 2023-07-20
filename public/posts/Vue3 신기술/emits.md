# emits 
---

> [emits](https://ko.vuejs.org/api/options-state.html#emits) : 컴포넌트에서 내보낼 커스텀 이벤트를 선언한다.


- Vue2
```
<template>
  <button @click="$emit('myclick')">Click Me!!</button>
</template>
```
```
<template>
  <my-component @myclick="onClick" />
</template>

<script>
export default {
  methods: {
    onClick() {
      //...
    }
  }
}
</script>
```
Vue2에서는 `$emit`을 사용해서 커스텀 이벤트를 설정했었다.

&nbsp;

- Vue3
```
<template>
  <button @click="$emit('myclick')">Click Me!!</button>
</template>

<script>
export default {
  emits: ['myclick']
}
</script>
```
Vue3 에서는 새롭게 추가된 `emits`속성을 사용해서 커스텀 이벤트를 모두 지정하여준다.

```
<script>
export default {
  emits: {
    myEvent: (text) => {
      return typeof text === 'string'
    }
  },
  methods: {
    doMyEvent1() {
      this.$emit('myEvent', 'TEST')  // OK
    },
    doMyEvent2() {
      this.$emit('myEvent', 123) // NO（경고는 표시된다）
    }
  }
}
</script>
```
`$emit`으로 호출했을 때 그 이벤트가 유효한지를 검증할 수 있다. 