# Simple persian vue datepicker

> A fully support keyboard vue plugin to select jalali (persian) date

## Installation :electric_plug:

### npm

```
npm i simple-persian-vue-datepicker
```

## Usage :computer:

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

## Keyboard Options :keyboard:

you can control selected date by your keyboard the keys are :

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

## Props

| name             | functionality                     |
| ---------------- | --------------------------------- |
| inputPlaceholder | set placeholder for input         |
| inputStyle       | style the input `Described below` |

## Style It :paintbrush:

you can style component by passing below props to it

### Style elements

| Prop name  | Element    |
| ---------- | ---------- |
| inputStyle | Main input |

### Example

```javascript
<Picker v-model="date" inputStyle="background:red;border:10px solid black;" />
```

## License

**This project is licensed under the MIT License**
