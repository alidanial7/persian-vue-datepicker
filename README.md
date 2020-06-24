# Simple persian vue datepicker

> A vue plugin to select jalali (persian) date

## Installation

### npm

```
npm i simple-persian-vue-datepicker
```

## Usage

### globally

#### main.js

```javascript
//...
import Picker from "simple-persian-vue-datepicker";
Vue.component("Picker", Picker);
//...
```

### in components

#### component.vue

```javascript
<template>
    <div>
        <Picker v-model="date" />
    </div>
</template>

<script>
    import Picker from 'simple-persian-vue-datepicker'
    export default {
        data(){
            return {
                date: ''
            }
        },
        components: {
            Picker: Picker
        }
    }
</script>
```

## License

**This project is licensed under the MIT License**
