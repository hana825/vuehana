# 반응형 API \_ 핵심

---

## #ref()

전달된 값을 갖게 되고, 이것을 가리키는 단일 속성 `.value`가 있는 변경 가능한 반응형 ref 객체를 반환한다.

- 타입:

```
function ref<T>(value: T): Ref<UnwrapRef<T>>

interface Ref<T> {
    value: T
}
```

- 세부 사항:
  ref 객체는 반응형이며, `.value`속성에 새 값을 할당할 수 있다. 즉, `.value`에 대한 모든 읽기 작업이 추적되고, 쓰기 작업은 관련 이펙트를 트리거한다.

객체가 ref의 값(`.value`)으로 할당되면, reactive()로 내부 깊숙이(deeply) 반응하게 된다. 이러한 동작은 객체 내부 깊숙이 ref가 포함되어 있으면, 언래핑됨을 의미한다.
