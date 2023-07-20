# Fragments

---

> multi-root 노드 컴포넌트 지원!

&nbsp;

### 2.x 문법

2.X에서는 multi-root 컴포넌트가 지원되지 않아서 컴포넌트들을 `<template>` 내에 단일 태그(`<div>`)로 wrapping 해야 했다. (Vue 인스턴스를 단일 DOM 요소로 바인딩 했어야 했다)

```
<!-- Layout.vue -->
<template>
  <div>
    <header>...</header>
    <main>...</main>
    <footer>...</footer>
  </div>
</template>
```

&nbsp;

### 3.x 문법

하지만, 3.X에서 <`Fragment`>를 지원해줘서 다중 루트 노드를 작성할 수 있게 되었다. (Fragment는 DOM 트리에 그려지지 않는다)

```
<!-- Layout.vue -->
<template>
  <header>...</header>
  <main v-bind="$attrs">...</main>
  <footer>...</footer>
</template>
```
