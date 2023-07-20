# Teleport

---

> `<Teleport>` 는 컴포넌트 템플릿의 일부를 해당 컴포넌트의 DOM 계층 일부의 DOM 노드로 이동할 수 있게 해주는 built-in 컴포넌트이다.  
> 모달이나 알림 등과 같이 특정 컴포넌트가 부모에 상속되어 있으면서도 렌더링되는 위치는 제 2의 루트일 때 `<Teleport>` 기능이 유용하다.

&nbsp;

### 기본 사용법

- 모달 예시

```
<div class="outer">
  <h3>Vue Teleport Example</h3>
  <div>
    <MyModal />
  </div>
</div>
```

`<MyModal>` 구현

```
<script setup>
import { ref } from 'vue'

const open = ref(false)
</script>

<template>
  <button @click="open = true">모달 열기</button>

  <div v-if="open" class="modal">
    <p>짜자잔~ 모달입니다!</p>
    <button @click="open = false">닫기</button>
  </div>
</template>

<style scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
```

컴포넌트에는 모달의 열기를 트리거하는 `<button>`과 .modal 클래스가 있는 `<div>`가 포함되어 있으며, 여기에는 모달의 컨텐츠와 닫기 버튼이 포함된다.  
초기 HTML 구조 내에서 이 컴포넌트를 사용할 때 여러가지 잠재적인 문제가 있을 수 있다.

&nbsp;

`<Teleport>`는 중첩된 DOM 구조에서 벗어날 수 있도록 하여 이러한 문제를 해결할 수 있는 깔끔한 방법을 제공한다.

- `<Teleport>` 사용한 `<MyModal>`

```
<button @click="open = true">모달 열기</button>

<Teleport to="body">
  <div v-if="open" class="modal">
    <p>짜자잔~ 모달입니다!</p>
    <button @click="open = false">닫기</button>
  </div>
</Teleport>
```

`<Teleport>`의 `to` 대상은 CSS 셀렉터 문자열 또는 실제 DOM 노드여야 한다. 여기서 Vue에게 이 템플릿 조각을 body 태그로 이동하도록 지시한다.

> `<Teleport>` 컴포넌트가 `to` 대상으로 이동하여 마운트 되기 전, 대상은 이미 DOM에 있어야 한다. 이상적으로는 전체 Vue 앱 외부의 엘리먼트여야 한다. Vue에서 렌더링한 다른 엘리먼트를 대상으로 하는 경우, `<Teleport>` 전에 해당 엘리먼트가 마운트되었는지 확인해야 한다.
