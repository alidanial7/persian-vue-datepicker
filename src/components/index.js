import Vue from "vue";
import Picker from "./Picker.vue";
const Components = {
  Picker,
};
Object.keys(Components).forEach((name) => {
  Vue.component(name, Components[name]);
});

export default Components;
