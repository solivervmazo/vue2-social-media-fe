
/* eslint-disable no-unused-vars */
export const stores = {
    namespaced: true,
    state: {
        fullname: "soliver mazo",
        account: "@solivermazo",
        linkedAccounts: {
            facebook: "@soliver.fb",
            twitter: "@soliver.twitter",
            instagram: "@soliver.insta",
            twitch: "@soliver.gamer",
            youtube: "@soliver.vlogger",
            googlePlus: "@soliver.plus"
        },
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        banner: "https://odindesignthemes.com/vikinger/img/cover/01.jpg",
        reactions: {
            funny: 1939,
            wow: 1599,
            angry: 178,
            sad: 121,
            like: 12642,
            love: 8912,
            dislike: 945,
            happy: 7034
        }
    },
    mutations: { },
    getters: {
        GET_ACCOUNT: state => ( { key = false } = {} ) =>  {
            if(!key) return state;
            return state[key] || false;
        }
    },
    actions: {}
};
