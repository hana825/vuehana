# computed()

---

- Vue2 의 `computed`

```
<template>
  <div>
    <p>Radius: {{ radius }}</p>
    <p>Area: {{ area }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radius: 5,
    };
  },
  computed: {
    area() {
      return Math.PI * this.radius * this.radius;
    },
  },
};
</script>
```

반지름 데이터 속성을 가진 컴포넌트와 반지름 값을 기반으로 원의 area을 계산하는 `computed` 속성이 있다.  
`computed` 속성은 반지름에 따라 달라지므로 반지름이 변경될 때마다 업데이트 된다.

&nbsp;

- Vue3의 `computed()`

```
<template>
<template>
  <div>
    <p>Radius: {{ radius }}</p>
    <p>Area: {{ area }}</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const radius = ref(5);

    const area = computed(() => {
      return Math.PI * radius.value * radius.value;
    });

    return {
      radius,
      area,
    };
  },
};
</script>
```

`computed()`는 `radius.value`를 기반으로 area 값을 계산하는 함수를 사용한다. 이전 예시와 같게 `area`값은 반지름이 변경될때마다 자동으로 업데이트된다.

&nbsp;

### Vue2에서의 `get`, `set`

```
<template>
  <div>
    <p>Radius: {{ radius }}</p>
    <p>Area: {{ area }}</p>
    <button @click="incrementRadius">Increment Radius</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      _radius: 5, // public property가 아님을 나타내는 underscore(_) 사용
    };
  },
  computed: {
    radius: {
      get() {
        return this._radius;
      },
      set(value) {
        // 값을 업데이트 하기 전에 여기에 추가 논리를 수행할 수 있다.
        this._radius = value;
      },
    },
    area() {
      return Math.PI * this.radius * this.radius;
    },
  },
  methods: {
    incrementRadius() {
      // 버튼을 클릭하면 'set'를 통해 계산된 속성 'radius'가 업데이트된다
      this.radius += 1;
    },
  },
};
</script>
```

`get()`, `set()` 을 사용해서 computed 속성 `radius`를 정의한다.  
`get()`는 \_radius의 현재 값을 반환하는 반면, `set()`는 값을 업데이트하기 전에 추가 로직을 수행할 수 있다. 버튼을 클릭하면 incrementRadius 메서드가 radius를 업데이트하고, 설정 함수를 호출하여 \_radius 값을 업데이트한다.

&nbsp;

### Vue3에서는..

```
<template>
  <div>
    <p>Radius: {{ radius }}</p>
    <p>Area: {{ area }}</p>
    <button @click="incrementRadius">Increment Radius</button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const radius = ref(5);

    const area = computed(() => {
      return Math.PI * radius.value * radius.value;
    });

    function incrementRadius() {
      // 버튼을 클릭하면 반응형 ref `radius`가 직접 업데이트된다.
      radius.value += 1;
    }

    return {
      radius,
      area,
      incrementRadius,
    };
  },
};
</script>
```

`data()`와 `computed`를 사용하는 대신, `ref`와 `computed()`를 사용한다. `setup()`은 컴포넌트를 설정하고 반응형 속성과 함수를 return 하기 위해 사용된다. 반응성과 `computed()`는 Vue3의 **Composition API**에 의해 자동으로 처리되며, Vue2에서와 같이 `get`, `set`을 명시적으로 사용할 필요가 없다.
