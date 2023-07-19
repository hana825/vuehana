# v-slot

---

> 이름이 있는 slot 또는 props를 받을 것으로 예상되는 범위형(scoped) slot을 나타낸다.

- 단축 문법 : `#`
- 요구되는 값 :
  destructuring을 포함하여 함수 인수 위치에서 유효한 JavaScript expression 을 사용한다. Optional - slot에 props가 전달될 것으로 예상되는 경우에만 필요하다.
- Argument : slot 이름 (optional, 기본값은 `default`)
- Limited to :
  - `<template>`
  - components(props를 수신할 기본 slot만 있는 경우)
- Example

```
<!-- Named slots -->
<BaseLayout>
  <template v-slot:header>
    Header content
  </template>

  <template v-slot:default>
    Default slot content
  </template>

  <template v-slot:footer>
    Footer content
  </template>
</BaseLayout>

<!-- Named slot that receives props -->
<InfiniteScroll>
  <template v-slot:item="slotProps">
    <div class="item">
      {{ slotProps.item.text }}
    </div>
  </template>
</InfiniteScroll>

<!-- Default slot that receive props, with destructuring -->
<Mouse v-slot="{ x, y }">
  Mouse position: {{ x }}, {{ y }}
</Mouse>
```
