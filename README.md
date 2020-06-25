# Simple persian vue datepicker

> A fully support keyboard vue plugin to select jalali (persian) date

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

import "simple-persian-vue-datepicker/dist/simple-persian-vue-datepicker.css";

Vue.component("Picker", Picker);

//...
```

### in components

#### component.vue

```javascript

<template>

<div>

<Picker  v-model="date" />

</div>

</template>



<script>

import Picker from 'simple-persian-vue-datepicker'

import "simple-persian-vue-datepicker/dist/simple-persian-vue-datepicker.css";



export default {

data(){

return {

date:  ''

}

},

components: {

Picker: Picker

}

}

</script>

```

## Keyboard Options

| key         | function         |
| ----------- | ---------------- |
| arrow-up    | move hover up    |
| arrow-down  | move hover down  |
| arrow-left  | move hover left  |
| arrow-right | move hover right |
| w           | plus year        |
| s           | minus year       |
| a           | plus month       |
| d           | minus month      |
| space       | select date      |

## License

**This project is licensed under the MIT License**
