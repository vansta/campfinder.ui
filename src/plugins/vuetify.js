import 'material-design-icons-iconfont/dist/material-design-icons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
        iconfont: 'md'
    },
    theme: {
        themes: {
            light: {
                primary: '#4C8000',
                secondary: '#8B4513',
                accent: '#8c9eff',
                error: '#b71c1c',
                background: '#4C9900'
            }
        }
    }
});