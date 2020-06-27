<template>
  <div id="app">
    <Datepicker v-model="date" />
  </div>
</template>

<script>
import Datepicker from "./components/Picker.vue";

export default {
  name: "App",
  components: {
    Datepicker,
  },
  data() {
    return {
      date: "",
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
