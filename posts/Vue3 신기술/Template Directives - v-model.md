# v-model
---

- 커스텀 컴포넌트 사용할 때 변경된 이름들 :
    - prop : `value` → `modelValue`
    - event : `input` → `update:modelValue`

- BREAKING : `v-bind`의 `.sync` modifier와 컴포넌트 `model` 옵션이 제거되고 `v-model`에 대한 인수로 대체되었다.
- NEW : 동일한 컴포넌트에서 multiple `v-model` 바인딩 가능
- NEW : 커스텀 `v-model` modifier 생성 가능


&nbsp;

Vue 3에서는 혼란을 줄이고 `v-model`를 보다 유연하게 사용할 수 있도록 양방향 데이터 바인딩을 위한 API가 표준화 되고 있다.

&nbsp;


## 2.x 문법
```
<ChildComponent v-model="pageTitle" />

<!-- would be shorthand for: -->

<ChildComponent :value="pageTitle" @input="pageTitle = $event" />
```
2.x에서 `v-model`을 사용하는 것은 `value` prop을 전달하고 input event를 내보내는(emitting) 것과 같다.

```
<!-- ParentComponent.vue -->

<ChildComponent v-model="pageTitle" />
```
prop 이나 이벤트 이름을 다른 이름으로 변경하려면 `ChildComponent` 에 `model` 옵션을 추가해야 한다.
```
// ChildComponent.vue

export default {
  model: {
    prop: 'title',
    event: 'change'
  },
  props: {
    // this allows using the `value` prop for a different purpose
    value: String,
    // use `title` as the prop which take the place of `value`
    title: {
      type: String,
      default: 'Default title'
    }
  }
}
```
아 경우 `v-model`은 다음과 같이 간단하게 할 수 있다.
```
<ChildComponent :title="pageTitle" @change="pageTitle = $event" />
```
### `v-bind.sync` 사용
경우에 따라 다른 prop에 대한 기존 `v-model` 외에 **쌍방향 바인딩**이 필요할 수 있다. 이를 위해 `update:myPropName` 패턴으로 이벤트를 내보내는 것이 좋다.  
 예를 들어, `title` prop을 사용한 이전 예제의 `ChildComponent`에 대해 다음을 사용하여 새 값을 할당하려는걸 전달할 수 있다.
```
this.$emit('update:title', newValue)
```
그 다음 부모는 원하는 경우 해당 이벤트를 수신하고 local data property를 업데이트 할 수 있다.  
이렇게 :
```
<ChildComponent :title="pageTitle" @update:title="pageTitle = $event" />
```
편의를 위해 `.sync` 수식어를 사용해서 이 패턴을 간단하게 할 수 있다.
```
<ChildComponent :title.sync="pageTitle" />
```

&nbsp;

## 3.x 문법

3.x에서 커스텀 컴포넌트의 `v-model`은 `modelValue` prop을 전달하고 `update:modelValue` 이벤트를 내보내는 것과 같다.
```
<ChildComponent v-model="pageTitle" />

<!-- would be shorthand for: -->

<ChildComponent
  :modelValue="pageTitle"
  @update:modelValue="pageTitle = $event"
/>
```
### `v-model` 인수(arguments)
model 이름을 `model` 컴포넌트 옵션 대신 변경하려면, `v-model`에 인수를 전달할 수 있다.
```
<ChildComponent v-model:title="pageTitle" />

<!-- would be shorthand for: -->

<ChildComponent :title="pageTitle" @update:title="pageTitle = $event" />
```
```v-model:title="pageTitle"``` 여기서  `title`은 argument: Prop 이름 이고, `pageTitle`은 value: 바인딩 할 data 이다.
 

 이 기능으로 `.sync` modifier 를 대체하는 역할도 하고 커스텀 컴포넌트에 여러 `v-model`를 사용할 수 있다.
 ```
 <ChildComponent v-model:title="pageTitle" v-model:content="pageContent" />

<!-- would be shorthand for: -->

<ChildComponent
  :title="pageTitle"
  @update:title="pageTitle = $event"
  :content="pageContent"
  @update:content="pageContent = $event"
/>
```

### `v-model` modifiers

`.trim`과 같은 2.x 하드 코드화된 `v-model` modifier 외에도 이제 3.x는 다음과 같은 커스텀 modifier를 지원한다.
```
<ChildComponent v-model.capitalize="pageTitle" />
```