import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: "#2995b8",
    secondary: "#78A540",
    accent: "#8dc63f",
    error: "#e74c3c",
    warning: "#D3BC8D",
    info: "#2995b8",
    success: "#78A540"
  }
})