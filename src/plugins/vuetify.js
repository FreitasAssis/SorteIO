import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

export default new Vuetify({
    theme: {
        themes: {
          light: {
            primary: "#007e3d",
            secondary: "#284f36",
            grey: "#848484"
          },
        },
    }
})
