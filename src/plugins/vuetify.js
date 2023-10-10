import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors';
Vue.use(Vuetify);

export default new Vuetify({
    theme: { 
        dark: false,
        options: { customProperties: true },
        themes: {
            light: {
                primary: colors.cyan.lighten1,
                dm__primary: colors.cyan.lighten1,
                dm__primary2: colors.cyan.darken2,
                dm__primary3: colors.cyan.lighten3,
                dm__info: colors.deepPurple.lighten1,
                dm__info3: colors.deepPurple.lighten3,
                dm__info5: colors.deepPurple.lighten5,
                dm__secondary: colors.blueGrey.darken1,
                dm__secondary4: colors.blueGrey.darken4,
                dm__error: colors.red.darken1,
                dm__error2: colors.red.darken2,
                dm__disabled1: colors.grey.lighten1,
                dm__disabled5: colors.grey.lighten5,
                //typography
            }
        }
    }
    
});
