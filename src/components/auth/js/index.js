
/* eslint-disable no-unused-vars */
export const stores = {
    namespaced: true,
    state: {
        authed: true
    },
    mutations: {
        SET_AUTHED: function (state, { allow = false } = {}){
            state.authed = allow;
        }
    },
    getters: {
        GET_AUTHED: state => {
          return state.authed;
        }
    },
    actions: {
        login: function({commit}){
            var allow = true;
            commit("SET_AUTHED" , { allow });
        },
        authed: function ({state}) {
            return state.authed;
        },
        signOut: function ({commit}) {
            var allow = false;
            window.location = "/"
            commit("SET_AUTHED" , { allow });
        }

    }
};
