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

## Props :heavy_plus_sign:

you can pass Your data to input whit these props:(none of them are required)

| name             | functionality                                                                |
| ---------------- | ---------------------------------------------------------------------------- |
| inputPlaceholder | set placeholder for input                                                    |
| inputDefault     | selected date by default in format `yyyy/mm/dd` (pass `now` to select today) |
| inputStyle       | style the input `Described below`                                            |

## Style It :paintbrush:

### Pass like props:

you can style component by passing below props to it

#### Style elements

| Prop name  | Element    |
| ---------- | ---------- |
| inputStyle | Main input |

#### Example

```javascript
<Picker v-model="date" inputStyle="background:red;border:10px solid black;" />
```

### With CSS:

in this mode you can call below css classes to change the style of items:

| class name | Element |
| ---------- | ------- |
| spvd-input | input   |
| spvd-label | input   |

## License :newspaper:

**This project is licensed under the MIT License**
