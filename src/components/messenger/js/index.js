
/* eslint-disable no-unused-vars */
export const stores = {
    namespaced: true,
    state: {
        contacts: [
            {
                fullname: 'Jaymee Jaymee' ,
                avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                status: 'active',
                timestamp: 'current' , //sould be timestamp
                messages: [
                    {
                        message: 'Hi, hows the update?' ,
                        timestamp: '9:00 am' , //sould be timestamp
                    },
                    {
                        message: 'Hello' ,
                        timestamp: '8:00 am' , //sould be timestamp
                    },
                ]
            },
            {
                fullname: 'Tal Hadi' ,
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                status: 'offline',
                timestamp: '1hr ago' , //sould be timestamp
                messages: [
                    {
                        message: 'Hi, hows the update?' ,
                        timestamp: '7:00 am' , //sould be timestamp
                    },
                    {
                        message: 'Hello' ,
                        timestamp: '6:00 am' , //sould be timestamp
                    },
                ]
            },
            {
                fullname: 'Jaymee Jaymee' ,
                avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                status: 'active',
                timestamp: 'current' , //sould be timestamp
                messages: [
                    {
                        message: 'Hi, hows the update?' ,
                        timestamp: '9:00 am' , //sould be timestamp
                    },
                    {
                        message: 'Hello' ,
                        timestamp: '8:00 am' , //sould be timestamp
                    },
                ]
            },
            {
                fullname: 'Tal Hadi' ,
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                status: 'offline',
                timestamp: '1hr ago' , //sould be timestamp
                messages: [
                    {
                        message: 'Hi, hows the update?' ,
                        timestamp: '7:00 am' , //sould be timestamp
                    },
                    {
                        message: 'Hello' ,
                        timestamp: '6:00 am' , //sould be timestamp
                    },
                ]
            },
            {
                fullname: 'Jaymee Jaymee' ,
                avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                status: 'active',
                timestamp: 'current' , //sould be timestamp
                messages: [
                    {
                        message: 'Hi, hows the update?' ,
                        timestamp: '9:00 am' , //sould be timestamp
                    },
                    {
                        message: 'Hello' ,
                        timestamp: '8:00 am' , //sould be timestamp
                    },
                ]
            },
            {
                fullname: 'Tal Hadi' ,
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                status: 'offline',
                timestamp: '1hr ago' , //sould be timestamp
                messages: [
                    {
                        message: 'Hi, hows the update?' ,
                        timestamp: '7:00 am' , //sould be timestamp
                    },
                    {
                        message: 'Hello' ,
                        timestamp: '6:00 am' , //sould be timestamp
                    },
                ]
            },
            {
                fullname: 'Jaymee Jaymee' ,
                avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                status: 'active',
                timestamp: 'current' , //sould be timestamp
                messages: [
                    {
                        message: 'Hi, hows the update?' ,
                        timestamp: '9:00 am' , //sould be timestamp
                    },
                    {
                        message: 'Hello' ,
                        timestamp: '8:00 am' , //sould be timestamp
                    },
                ]
            },
            {
                fullname: 'Tal Hadi' ,
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                status: 'offline',
                timestamp: '1hr ago' , //sould be timestamp
                messages: [
                    {
                        message: 'Hi, hows the update?' ,
                        timestamp: '7:00 am' , //sould be timestamp
                    },
                    {
                        message: 'Hello' ,
                        timestamp: '6:00 am' , //sould be timestamp
                    },
                ]
            },
            {
                fullname: 'Jaymee Jaymee' ,
                avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
                status: 'active',
                timestamp: 'current' , //sould be timestamp
                messages: [
                    {
                        message: 'Hi, hows the update?' ,
                        timestamp: '9:00 am' , //sould be timestamp
                    },
                    {
                        message: 'Hello' ,
                        timestamp: '8:00 am' , //sould be timestamp
                    },
                ]
            },
            {
                fullname: 'Tal Hadi' ,
                avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
                status: 'offline',
                timestamp: '1hr ago' , //sould be timestamp
                messages: [
                    {
                        message: 'Hi, hows the update?' ,
                        timestamp: '7:00 am' , //sould be timestamp
                    },
                    {
                        message: 'Hello' ,
                        timestamp: '6:00 am' , //sould be timestamp
                    },
                ]
            },
        ]
    },
    mutations: {},
    getters: {
        GET_CONTACTS: state => {
          return state.contacts;
        }
    },
    actions: { }
};
