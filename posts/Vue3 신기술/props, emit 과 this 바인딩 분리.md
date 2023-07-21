# props, emit 과 this 바인딩 분리

---

### props

this 바인딩을 하던 방식에서, `setup()`의 첫 번째 인자로 받아 내부에서 활용할 수 있다.

- Vue2

```
mounted(){
    console.log('title: ' + this.title)
}
```

- Vue3

```
setup(props){
    // ...
    onMounted(() => {
        console.log('title :' + props.title)
    })
    // ...
}
```

&nbsp;

### emit

this 바인딩을 하던 방식에서, `setup()`의 두 번째 인자인 `context`에 포함되어 있다.

- Vue2

```
testSample(){
    this.$emit('testSample', {
        test: this.test,
        sample: this.sample
    })
}
```

- Vue3

```
setup(props, {emit}){
    // ...
    const testSample = () => {
        emit('testSample', {
            test: state.test,
            sample: state.sample
        })
    }
}
```
