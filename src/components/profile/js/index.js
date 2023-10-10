
/* eslint-disable no-unused-vars */
export const stores = {
    namespaced: true,
    state: {
        fullname: "soliver mazo",
        account: "@solivermazo",
        website: "www.gamehuntress.com",
        linkedAccounts: {
            facebook: "@soliver.fb",
            twitter: "@soliver.twitter",
            instagram: "@soliver.insta",
            twitch: "@soliver.gamer",
            youtube: "@soliver.vlogger",
            'google-plus': "@soliver.plus"
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
        },
        interactions: {
            posts: 930,
            friends: 82,
            visits: '5.7k'
        },
        aboutMe: {
            text: `Hi! My name is Marina but some people may know me as GameHuntress! I have a Twitch channel where I stream, play and review all the newest games.`,
            descriptions: [
                {
                    label: 'joined',
                    text: 'March 26th, 2017',
                },
                {
                    label: 'city',
                    text: 'Los Angeles',
                },
                {
                    label: 'country',
                    text: 'united states',
                },
                {
                    label: 'age',
                    text: '32 years old',
                },
                {
                    label: 'web',
                    link: true,
                    text: 'www.gamehuntress.com'
                }
            ]
        }
    },
    mutations: { },
    getters: {
        GET_PROFILE: state => ( { key = false } = {} ) =>  {
            if(!key) return state;
            return state[key] || false;
        }
    },
    actions: {}
};
