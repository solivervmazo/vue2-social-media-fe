
/* eslint-disable no-unused-vars */
const { v4: $uuid } = require("uuid");

export const stores = {
    namespaced: true,
    state: {
        categories: [
            {
                uuid: $uuid(),
                value: "all",
                cover:
                    "https://odindesignthemes.com/vikinger/img/marketplace/category/01.png",
                title: "browse all",
                subtitle: "check out all items",
                items: 1360,
            },
            {
                uuid: $uuid(),
                value: "featured",
                cover:
                    "https://odindesignthemes.com/vikinger/img/marketplace/category/02.png",
                title: "featured",
                subtitle: "handpicked by us",
                items: 254,
            },
            {
                uuid: $uuid(),
                value: "digital",
                cover:
                    "https://odindesignthemes.com/vikinger/img/marketplace/category/03.png",
                title: "digital",
                subtitle: "logos, banners...",
                items: 1207,
            },
            {
                uuid: $uuid(),
                value: "physical",
                cover:
                    "https://odindesignthemes.com/vikinger/img/marketplace/category/04.png",
                title: "physical",
                subtitle: "prints, joysticks...",
                items: 153,
            },
        ],
        items: [
            {
                uuid: $uuid(),
                cover:
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/01.jpg",
                title: "Twitch Stream UI Pack",
                marketCategory: "digital",
                category: "Stream Packs",
                description:
                    "Awesome hexagon themed stream pack, you can change all colors and...",
                price: 12,
                ratings: 4.2 ,
                author: {
                    fullname: "Neko Bebop",
                    account: `@nekobop`,
                    avatar: "https://odindesignthemes.com/vikinger/img/avatar/07.jpg",
                    description: "5 items published",
                    badges: [
                        "https://odindesignthemes.com/vikinger/img/badge/age-s.png",
                        "https://odindesignthemes.com/vikinger/img/badge/bronzec-s.png",
                        "https://odindesignthemes.com/vikinger/img/badge/caffeinated-s.png",
                        "https://odindesignthemes.com/vikinger/img/badge/goldc-s.png",
                    ],
                },
                slides: [
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/10.jpg",
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/17.jpg",
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/18.jpg",
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/19.jpg",
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/20.jpg",
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/15.jpg",
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/16.jpg",
                ],
                descriptions: [
                    {
                        title: `The Best eSports and Gaming Magazine Template!`,
                        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.
      
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                    },
                    {
                        title: `356+ HTML Elements Library included`,
                        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                    },
                    {
                        title: `Included in the Pack:`,
                        inclusions: [
                            "64 HTML Files",
                            "CSS and JS Elements Library with 365+ Items!",
                            "63 PSD Files Included SAVE $12",
                            "Easy template customization using npm & grunt (optional)",
                            "Vector Illustrations Included",
                            "84+ eSports Widgets",
                            "Custom Plugins",
                            "Fully Responsive",
                            "Google Fonts",
                        ],
                    },
                ],
                licenses: [
                    {   
                        id: 11,
                        default: true,
                        title: "regular license",
                        description: `For use, by you or one client, in a single end product which end users are not charged for.`,
                    },
                    {   
                        id: 12,
                        default: false,
                        title: "extended license",
                        description: `For use, by you or one client, in a single end product which end users can be charged for.`,
                    },
                ],
                sales: 1.36,
                details: {
                    'updated': `October 13rd, 2019`,
                    'created': `August 17th, 2019`,
                    'category': {
                        link: true,
                        target: "category",
                    },
                    'files included': `HTML Files, CSS Files, JS Files, Layered PSD`,
                    'layout': `responsive`,
                    'tags':  {
                        link: true,
                        target: "tags",
                    },
                },
                tags: ["gaming", "magazine", "web", "esports", "template"],
                comments: {
                    count: 1,
                    comments: [
                        {
                            timestamp: `15 mins ago`,
                            author: {
                                avatar: `https://odindesignthemes.com/vikinger/img/avatar/01.jpg`,
                                fullname: `valentine lonesome`,
                                account: `@valentinelonesome`,
                                tag: `purchased`,
                            },
                            text: `Hi! I just purchased this item and I have a question, does it have the PSD files included? Thanks!`,
                            reacts: {
                                likes: {
                                    total: 3,
                                    people: [
                                        `necko peblob`,
                                        `bearded wandere`,
                                        `valentine lonesome`,
                                    ],
                                },
                                happy: {
                                    total: 1,
                                    people: [`jaymee eemyaj`],
                                },
                            },
                            replies: [
                                {
                                    timestamp: `15 mins ago`,
                                    author: {
                                        fullname: "Neko Bebop",
                                        account: `@nekobop`,
                                        avatar:
                                            "https://odindesignthemes.com/vikinger/img/avatar/07.jpg",
                                        tag: `author`,
                                    },
                                    text: `Yes! They are all included in the pack!`,
                                    reacts: {
                                        likes: {
                                            total: 1,
                                            people: [`necko peblob`],
                                        },
                                        happy: {
                                            total: 1,
                                            people: [`jaymee eemyaj`],
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
                reviews: {
                    count: 2,
                    reviews: [
                        {
                            timestamp: `15 mins ago`,
                            tag: `item quality`,
                            reason: `Main reason would pretty much be all, nice clean code, easy to customise and work with. Commenting on each section is great, could not really ask for anything better. Top work!`,
                            author: {
                                avatar: `https://odindesignthemes.com/vikinger/img/avatar/05.jpg`,
                                fullname: `nick grissom`,
                                account: `@nickgrissom`,
                            },
                            ratings: 4,
                        },
                        {
                            timestamp: `2 days ago`,
                            tag: `documentation`,
                            reason: `Best template I have ever had. Good documentation and code practices.`,
                            author: {
                                avatar: `https://odindesignthemes.com/vikinger/img/avatar/04.jpg`,
                                fullname: `bearded wanderer`,
                                account: `@beardedwanderer`,
                            },
                            ratings: 4,
                        },
                        {
                            timestamp: `4 weeks ago`,
                            tag: `item quality`,
                            reason: `5 stars for exceptional Customer Support (quick, precise, detailed responses to questions), but 5 stars also for Design Quality and Customization. It is a beautiful clean design that can easily be customized to your needs. I had really specific questions and I received detailed solutions very promptly. Thank you!`,
                            author: {
                                avatar: `https://odindesignthemes.com/vikinger/img/avatar/01.jpg`,
                                fullname: `sarah diamond`,
                                account: `@sarahdiamond`,
                            },
                            ratings: 5,
                        },
                    ],
                },
            },
            {
                uuid: $uuid(),
                cover:
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/02.jpg",
                title: "Jaxxy Witch Black Frame",
                marketCategory: "digital",
                category: "Art Prints",
                description:
                    "30x60 inches fine art print, with glossy paper and a polymer black frame...",
                price: 34,
                ratings: 5,
                author: {
                    fullname: "Neko Bebop",
                    account: `@nekobebop`,
                    avatar: "https://odindesignthemes.com/vikinger/img/avatar/05.jpg",
                    description: "15 items published",
                    badges: [
                        "https://odindesignthemes.com/vikinger/img/badge/age-s.png",
                        "https://odindesignthemes.com/vikinger/img/badge/bronzec-s.png",
                        "https://odindesignthemes.com/vikinger/img/badge/caffeinated-s.png",
                        "https://odindesignthemes.com/vikinger/img/badge/goldc-s.png",
                    ],
                },
                slides: [
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/10.jpg",
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/17.jpg",
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/18.jpg",
                ],
                descriptions: [
                    {
                        title: `The Best eSports and Gaming Magazine Template!`,
                        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.
      
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                    },
                    {
                        title: `356+ HTML Elements Library included`,
                        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                    },
                    {
                        title: `Included in the Pack:`,
                        inclusions: [
                            "64 HTML Files",
                            "CSS and JS Elements Library with 365+ Items!",
                            "63 PSD Files Included SAVE $12",
                            "Easy template customization using npm & grunt (optional)",
                            "Vector Illustrations Included",
                            "84+ eSports Widgets",
                            "Custom Plugins",
                            "Fully Responsive",
                            "Google Fonts",
                        ],
                    },
                ],
                licenses: [
                    {
                        default: true,
                        title: "regular license",
                        description: `For use, by you or one client, in a single end product which end users are not charged for.`,
                    },
                    {
                        default: false,
                        title: "extended license",
                        description: `For use, by you or one client, in a single end product which end users can be charged for.`,
                    },
                ],
                sales: 1.36,
                details: {
                    updated: `October 13rd, 2019`,
                    created: `August 17th, 2019`,
                    filesIncluded: `HTML Files, CSS Files, JS Files, Layered PSD`,
                    layout: `responsive`,
                },
                tags: ["gaming", "magazine", "web", "esports", "template"],
                comments: {
                    count: 1,
                    comments: [
                        {
                            timestamp: `15 mins ago`,
                            author: {
                                avatar: `https://odindesignthemes.com/vikinger/img/avatar/05.jpg`,
                                fullname: `bearded wanderer`,
                                account: `@beardedwanderer`,
                                tag: `purchased`,
                            },
                            text: `Hi! I just purchased this item and I have a question, does it have the PSD files included? Thanks!`,
                            reacts: {
                                likes: {
                                    total: 3,
                                    people: [
                                        `necko peblob`,
                                        `bearded wandere`,
                                        `valentine lonesome`,
                                    ],
                                },
                                happy: {
                                    total: 1,
                                    people: [`jaymee eemyaj`],
                                },
                            },
                            replies: [
                                {
                                    timestamp: `15 mins ago`,
                                    author: {
                                        avatar: `https://odindesignthemes.com/vikinger/img/avatar/05.jpg`,
                                        fullname: `bearded wanderer`,
                                        account: `@beardedwanderer`,
                                        tag: `author`,
                                    },
                                    text: `Yes! They are all included in the pack!`,
                                    reacts: {
                                        likes: {
                                            total: 1,
                                            people: [`necko peblob`],
                                        },
                                        happy: {
                                            total: 1,
                                            people: [`jaymee eemyaj`],
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
                reviews: {
                    count: 2,
                    reviews: [
                        {
                            timestamp: `15 mins ago`,
                            tag: `item quality`,
                            reason: `Main reason would pretty much be all, nice clean code, easy to customise and work with. Commenting on each section is great, could not really ask for anything better. Top work!`,
                            author: {
                                avatar: `https://odindesignthemes.com/vikinger/img/avatar/05.jpg`,
                                fullname: `nick grissom`,
                                account: `@nickgrissom`,
                            },
                            ratings: 4,
                        },
                        {
                            timestamp: `2 days ago`,
                            tag: `documentation`,
                            reason: `Best template I have ever had. Good documentation and code practices.`,
                            author: {
                                avatar: `https://odindesignthemes.com/vikinger/img/avatar/04.jpg`,
                                fullname: `bearded wanderer`,
                                account: `@beardedwanderer`,
                            },
                            ratings: 4,
                        },
                        {
                            timestamp: `4 weeks ago`,
                            tag: `item quality`,
                            reason: `5 stars for exceptional Customer Support (quick, precise, detailed responses to questions), but 5 stars also for Design Quality and Customization. It is a beautiful clean design that can easily be customized to your needs. I had really specific questions and I received detailed solutions very promptly. Thank you!`,
                            author: {
                                avatar: `https://odindesignthemes.com/vikinger/img/avatar/01.jpg`,
                                fullname: `sarah diamond`,
                                account: `@sarahdiamond`,
                            },
                            ratings: 5,
                        },
                    ],
                },
            },
            {
                uuid: $uuid(),
                cover:
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/03.jpg",
                title: "Flaming Skull Team Logo",
                marketCategory: "digital",
                category: "Logos & Badges",
                description:
                    "Get this incredible horned skull logo! It's really easy to change colors with the...",
                avatar: "https://odindesignthemes.com/vikinger/img/avatar/02.jpg",
                price: 40,
                ratings: 2,
                author: {
                    fullname: "marina valentines",
                    account: `@marinavalentines`,
                    avatar: "https://odindesignthemes.com/vikinger/img/avatar/02.jpg",
                    description: "6 items published",
                    badges: [
                        "https://odindesignthemes.com/vikinger/img/badge/age-s.png",
                        "https://odindesignthemes.com/vikinger/img/badge/caffeinated-s.png",
                    ],
                },
                slides: [
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/10.jpg",
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/17.jpg",
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/18.jpg",
                ],
                descriptions: [
                    {
                        title: `The Best eSports and Gaming Magazine Template!`,
                        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.
      
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                    },
                    {
                        title: `356+ HTML Elements Library included`,
                        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                    },
                    {
                        title: `Included in the Pack:`,
                        inclusions: [
                            "64 HTML Files",
                            "CSS and JS Elements Library with 365+ Items!",
                            "63 PSD Files Included SAVE $12",
                            "Easy template customization using npm & grunt (optional)",
                            "Vector Illustrations Included",
                            "84+ eSports Widgets",
                            "Custom Plugins",
                            "Fully Responsive",
                            "Google Fonts",
                        ],
                    },
                ],
                licenses: [
                    {
                        default: true,
                        title: "regular license",
                        description: `For use, by you or one client, in a single end product which end users are not charged for.`,
                    },
                    {
                        default: false,
                        title: "extended license",
                        description: `For use, by you or one client, in a single end product which end users can be charged for.`,
                    },
                ],
                sales: 1.36,
                details: {
                    updated: `October 13rd, 2019`,
                    created: `August 17th, 2019`,
                    filesIncluded: `HTML Files, CSS Files, JS Files, Layered PSD`,
                    layout: `responsive`,
                },
                tags: ["gaming", "magazine", "web", "esports", "template"],
                comments: {
                    count: 1,
                    comments: [
                        {
                            timestamp: `15 mins ago`,
                            author: {
                                avatar: `https://odindesignthemes.com/vikinger/img/avatar/05.jpg`,
                                fullname: `bearded wanderer`,
                                account: `@beardedwanderer`,
                                tag: `purchased`,
                            },
                            text: `Hi! I just purchased this item and I have a question, does it have the PSD files included? Thanks!`,
                            reacts: {
                                likes: {
                                    total: 3,
                                    people: [
                                        `necko peblob`,
                                        `bearded wandere`,
                                        `valentine lonesome`,
                                    ],
                                },
                                happy: {
                                    total: 1,
                                    people: [`jaymee eemyaj`],
                                },
                            },
                            replies: [
                                {
                                    timestamp: `15 mins ago`,
                                    author: {
                                        avatar: `https://odindesignthemes.com/vikinger/img/avatar/05.jpg`,
                                        fullname: `bearded wanderer`,
                                        account: `@beardedwanderer`,
                                        tag: `author`,
                                    },
                                    text: `Yes! They are all included in the pack!`,
                                    reacts: {
                                        likes: {
                                            total: 1,
                                            people: [`necko peblob`],
                                        },
                                        happy: {
                                            total: 1,
                                            people: [`jaymee eemyaj`],
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
                reviews: {
                    count: 2,
                    reviews: [
                        {
                            timestamp: `15 mins ago`,
                            tag: `item quality`,
                            reason: `Main reason would pretty much be all, nice clean code, easy to customise and work with. Commenting on each section is great, could not really ask for anything better. Top work!`,
                            author: {
                                avatar: `https://odindesignthemes.com/vikinger/img/avatar/05.jpg`,
                                fullname: `nick grissom`,
                                account: `@nickgrissom`,
                            },
                            ratings: 4,
                        },
                        {
                            timestamp: `2 days ago`,
                            tag: `documentation`,
                            reason: `Best template I have ever had. Good documentation and code practices.`,
                            author: {
                                avatar: `https://odindesignthemes.com/vikinger/img/avatar/04.jpg`,
                                account: `@beardedwanderer`,
                                fullname: `bearded wanderer`,
                            },
                            ratings: 4,
                        },
                        {
                            timestamp: `4 weeks ago`,
                            tag: `item quality`,
                            reason: `5 stars for exceptional Customer Support (quick, precise, detailed responses to questions), but 5 stars also for Design Quality and Customization. It is a beautiful clean design that can easily be customized to your needs. I had really specific questions and I received detailed solutions very promptly. Thank you!`,
                            author: {
                                avatar: `https://odindesignthemes.com/vikinger/img/avatar/01.jpg`,
                                account: `@sarahdiamond`,
                                fullname: `sarah diamond`,
                            },
                            ratings: 5,
                        },
                    ],
                },
            },
            {
                uuid: $uuid(),
                cover:
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/04.jpg",
                title: "Carbon Black Joystick",
                marketCategory: "physical",
                category: "Electronics",
                description:
                    "Slightly used X-Rock Carbon model joystick. Works perfectly, like the first...",
                price: 29,
                ratings: 5,
                author: {
                    fullname: "bearded wanderer",
                    account: `@beardedwanderer`,
                    avatar: "https://odindesignthemes.com/vikinger/img/avatar/04.jpg",
                    description: "5 items published",
                    badges: [
                        "https://odindesignthemes.com/vikinger/img/badge/age-s.png",
                        "https://odindesignthemes.com/vikinger/img/badge/bronzec-s.png",
                        "https://odindesignthemes.com/vikinger/img/badge/caffeinated-s.png",
                        "https://odindesignthemes.com/vikinger/img/badge/goldc-s.png",
                    ],
                },
                slides: [
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/10.jpg",
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/17.jpg",
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/18.jpg",
                ],
                descriptions: [
                    {
                        title: `The Best eSports and Gaming Magazine Template!`,
                        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.
      
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                    },
                    {
                        title: `356+ HTML Elements Library included`,
                        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                    },
                    {
                        title: `Included in the Pack:`,
                        inclusions: [
                            "64 HTML Files",
                            "CSS and JS Elements Library with 365+ Items!",
                            "63 PSD Files Included SAVE $12",
                            "Easy template customization using npm & grunt (optional)",
                            "Vector Illustrations Included",
                            "84+ eSports Widgets",
                            "Custom Plugins",
                            "Fully Responsive",
                            "Google Fonts",
                        ],
                    },
                ],
                licenses: [
                    {
                        default: true,
                        title: "regular license",
                        description: `For use, by you or one client, in a single end product which end users are not charged for.`,
                    },
                    {
                        default: false,
                        title: "extended license",
                        description: `For use, by you or one client, in a single end product which end users can be charged for.`,
                    },
                ],
                sales: 1.36,
                details: {
                    updated: `October 13rd, 2019`,
                    created: `August 17th, 2019`,
                    filesIncluded: `HTML Files, CSS Files, JS Files, Layered PSD`,
                    layout: `responsive`,
                },
                tags: ["gaming", "magazine", "web", "esports", "template"],
                comments: {
                    count: 1,
                    comments: [
                        {
                            timestamp: `15 mins ago`,
                            author: {
                                avatar: `https://odindesignthemes.com/vikinger/img/avatar/05.jpg`,
                                fullname: `bearded wanderer`,
                                account: `@beardedwanderer`,
                                tag: `purchased`,
                            },
                            text: `Hi! I just purchased this item and I have a question, does it have the PSD files included? Thanks!`,
                            reacts: {
                                likes: {
                                    total: 3,
                                    people: [
                                        `necko peblob`,
                                        `bearded wandere`,
                                        `valentine lonesome`,
                                    ],
                                },
                                happy: {
                                    total: 1,
                                    people: [`jaymee eemyaj`],
                                },
                            },
                            replies: [
                                {
                                    timestamp: `15 mins ago`,
                                    author: {
                                        avatar: `https://odindesignthemes.com/vikinger/img/avatar/05.jpg`,
                                        fullname: `bearded wanderer`,
                                        account: `@beardedwanderer`,
                                        tag: `author`,
                                    },
                                    text: `Yes! They are all included in the pack!`,
                                    reacts: {
                                        likes: {
                                            total: 1,
                                            people: [`necko peblob`],
                                        },
                                        happy: {
                                            total: 1,
                                            people: [`jaymee eemyaj`],
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
                reviews: {
                    count: 2,
                    reviews: [
                        {
                            timestamp: `15 mins ago`,
                            tag: `item quality`,
                            reason: `Main reason would pretty much be all, nice clean code, easy to customise and work with. Commenting on each section is great, could not really ask for anything better. Top work!`,
                            author: {
                                avatar: `https://odindesignthemes.com/vikinger/img/avatar/05.jpg`,
                                fullname: `nick grissom`,
                                account: `@nickgrissom`,
                            },
                            ratings: 4,
                        },
                        {
                            timestamp: `2 days ago`,
                            tag: `documentation`,
                            reason: `Best template I have ever had. Good documentation and code practices.`,
                            author: {
                                avatar: `https://odindesignthemes.com/vikinger/img/avatar/04.jpg`,
                                fullname: `bearded wanderer`,
                                account: `@beardedwanderer`,
                            },
                            ratings: 4,
                        },
                        {
                            timestamp: `4 weeks ago`,
                            tag: `item quality`,
                            reason: `5 stars for exceptional Customer Support (quick, precise, detailed responses to questions), but 5 stars also for Design Quality and Customization. It is a beautiful clean design that can easily be customized to your needs. I had really specific questions and I received detailed solutions very promptly. Thank you!`,
                            author: {
                                avatar: `https://odindesignthemes.com/vikinger/img/avatar/01.jpg`,
                                fullname: `sarah diamond`,
                                account: `@sarahdiamond`,
                            },
                            ratings: 5,
                        },
                    ],
                },
            },
            {
                uuid: $uuid(),
                cover:
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/05.jpg",
                title: "Emerald Dragon Digital Marketplace And Other Long String",
                marketCategory: "digital",
                category: "HTML Templates",
                description:
                    "Digital marketplace HTML template with all you need to build your own web...",
                price: 45,
                ratings: 3,
                author: {
                    fullname: "marina valentine",
                    account: `@marinavalentine`,
                    avatar: "https://odindesignthemes.com/vikinger/img/avatar/01.jpg",
                    description: "5 items published",
                    badges: [
                        "https://odindesignthemes.com/vikinger/img/badge/age-s.png",
                        "https://odindesignthemes.com/vikinger/img/badge/bronzec-s.png",
                        "https://odindesignthemes.com/vikinger/img/badge/caffeinated-s.png",
                        "https://odindesignthemes.com/vikinger/img/badge/goldc-s.png",
                    ],
                },
                slides: [
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/10.jpg",
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/17.jpg",
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/18.jpg",
                ],
                descriptions: [
                    {
                        title: `The Best eSports and Gaming Magazine Template!`,
                        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.
      
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                    },
                    {
                        title: `356+ HTML Elements Library included`,
                        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                    },
                    {
                        title: `Included in the Pack:`,
                        inclusions: [
                            "64 HTML Files",
                            "CSS and JS Elements Library with 365+ Items!",
                            "63 PSD Files Included SAVE $12",
                            "Easy template customization using npm & grunt (optional)",
                            "Vector Illustrations Included",
                            "84+ eSports Widgets",
                            "Custom Plugins",
                            "Fully Responsive",
                            "Google Fonts",
                        ],
                    },
                ],
                licenses: [
                    {
                        default: true,
                        title: "regular license",
                        description: `For use, by you or one client, in a single end product which end users are not charged for.`,
                    },
                    {
                        default: false,
                        title: "extended license",
                        description: `For use, by you or one client, in a single end product which end users can be charged for.`,
                    },
                ],
                sales: 1.36,
                details: {
                    updated: `October 13rd, 2019`,
                    created: `August 17th, 2019`,
                    filesIncluded: `HTML Files, CSS Files, JS Files, Layered PSD`,
                    layout: `responsive`,
                },
                tags: ["gaming", "magazine", "web", "esports", "template"],
                comments: {
                    count: 1,
                    comments: [
                        {
                            timestamp: `15 mins ago`,
                            author: {
                                avatar: `https://odindesignthemes.com/vikinger/img/avatar/05.jpg`,
                                fullname: `bearded wanderer`,
                                account: `@beardedwanderer`,
                                tag: `purchased`,
                            },
                            text: `Hi! I just purchased this item and I have a question, does it have the PSD files included? Thanks!`,
                            reacts: {
                                likes: {
                                    total: 3,
                                    people: [
                                        `necko peblob`,
                                        `bearded wandere`,
                                        `valentine lonesome`,
                                    ],
                                },
                                happy: {
                                    total: 1,
                                    people: [`jaymee eemyaj`],
                                },
                            },
                            replies: [
                                {
                                    timestamp: `15 mins ago`,
                                    author: {
                                        avatar: `https://odindesignthemes.com/vikinger/img/avatar/05.jpg`,
                                        fullname: `bearded wanderer`,
                                        account: `@beardedwanderer`,
                                        tag: `author`,
                                    },
                                    text: `Yes! They are all included in the pack!`,
                                    reacts: {
                                        likes: {
                                            total: 1,
                                            people: [`necko peblob`],
                                        },
                                        happy: {
                                            total: 1,
                                            people: [`jaymee eemyaj`],
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
                reviews: {
                    count: 2,
                    reviews: [
                        {
                            timestamp: `15 mins ago`,
                            tag: `item quality`,
                            reason: `Main reason would pretty much be all, nice clean code, easy to customise and work with. Commenting on each section is great, could not really ask for anything better. Top work!`,
                            author: {
                                avatar: `https://odindesignthemes.com/vikinger/img/avatar/05.jpg`,
                                fullname: `nick grissom`,
                                account: `@nickgrissom`,
                            },
                            ratings: 4,
                        },
                        {
                            timestamp: `2 days ago`,
                            tag: `documentation`,
                            reason: `Best template I have ever had. Good documentation and code practices.`,
                            author: {
                                avatar: `https://odindesignthemes.com/vikinger/img/avatar/04.jpg`,
                                fullname: `bearded wanderer`,
                                account: `@beardedwanderer`,
                            },
                            ratings: 4,
                        },
                        {
                            timestamp: `4 weeks ago`,
                            tag: `item quality`,
                            reason: `5 stars for exceptional Customer Support (quick, precise, detailed responses to questions), but 5 stars also for Design Quality and Customization. It is a beautiful clean design that can easily be customized to your needs. I had really specific questions and I received detailed solutions very promptly. Thank you!`,
                            author: {
                                avatar: `https://odindesignthemes.com/vikinger/img/avatar/01.jpg`,
                                fullname: `sarah diamond`,
                                account: `@sarahdiamond`,
                            },
                            ratings: 5,
                        },
                    ],
                },
            },
            {
                uuid: $uuid(),
                cover:
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/06.jpg",
                title: "Crimson Red Joystick",
                marketCategory: "digital",
                category: "Electronics",
                description:
                    "Almost new joystick! I bought it but my console gave up so I haven't used it...",
                avatar: "https://odindesignthemes.com/vikinger/img/avatar/04.jpg",
                price: 26,
                ratings: 4,
                author: {
                    fullname: "bearded wanderer",
                    account: `@beardedwanderer`,
                    avatar: "https://odindesignthemes.com/vikinger/img/avatar/04.jpg",
                    description: "15 items published",
                    badges: [
                        "https://odindesignthemes.com/vikinger/img/badge/age-s.png",
                        "https://odindesignthemes.com/vikinger/img/badge/bronzec-s.png",
                        "https://odindesignthemes.com/vikinger/img/badge/caffeinated-s.png",
                        "https://odindesignthemes.com/vikinger/img/badge/goldc-s.png",
                    ],
                },
                slides: [
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/10.jpg",
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/17.jpg",
                    "https://odindesignthemes.com/vikinger/img/marketplace/items/18.jpg",
                ],
                descriptions: [
                    {
                        title: `The Best eSports and Gaming Magazine Template!`,
                        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.
      
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                    },
                    {
                        title: `356+ HTML Elements Library included`,
                        text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in henderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                    },
                    {
                        title: `Included in the Pack:`,
                        inclusions: [
                            "64 HTML Files",
                            "CSS and JS Elements Library with 365+ Items!",
                            "63 PSD Files Included SAVE $12",
                            "Easy template customization using npm & grunt (optional)",
                            "Vector Illustrations Included",
                            "84+ eSports Widgets",
                            "Custom Plugins",
                            "Fully Responsive",
                            "Google Fonts",
                        ],
                    },
                ],
                licenses: [
                    {
                        default: true,
                        title: "regular license",
                        description: `For use, by you or one client, in a single end product which end users are not charged for.`,
                    },
                    {
                        default: false,
                        title: "extended license",
                        description: `For use, by you or one client, in a single end product which end users can be charged for.`,
                    },
                ],
                sales: 1.36,
                details: {
                    updated: `October 13rd, 2019`,
                    created: `August 17th, 2019`,
                    filesIncluded: `HTML Files, CSS Files, JS Files, Layered PSD`,
                    layout: `responsive`,
                },
                tags: ["gaming", "magazine", "web", "esports", "template"],
                comments: {
                    count: 1,
                    comments: [
                        {
                            timestamp: `15 mins ago`,
                            author: {
                                avatar: `https://odindesignthemes.com/vikinger/img/avatar/05.jpg`,
                                fullname: `bearded wanderer`,
                                account: `@beardedwanderer`,
                                tag: `purchased`,
                            },
                            text: `Hi! I just purchased this item and I have a question, does it have the PSD files included? Thanks!`,
                            reacts: {
                                likes: {
                                    total: 3,
                                    people: [
                                        `necko peblob`,
                                        `bearded wandere`,
                                        `valentine lonesome`,
                                    ],
                                },
                                happy: {
                                    total: 1,
                                    people: [`jaymee eemyaj`],
                                },
                            },
                            replies: [
                                {
                                    timestamp: `15 mins ago`,
                                    author: {
                                        avatar: `https://odindesignthemes.com/vikinger/img/avatar/05.jpg`,
                                        fullname: `bearded wanderer`,
                                        account: `@beardedwanderer`,
                                        tag: `author`,
                                    },
                                    text: `Yes! They are all included in the pack!`,
                                    reacts: {
                                        likes: {
                                            total: 1,
                                            people: [`necko peblob`],
                                        },
                                        happy: {
                                            total: 1,
                                            people: [`jaymee eemyaj`],
                                        },
                                    },
                                },
                            ],
                        },
                    ],
                },
                reviews: {
                    count: 2,
                    reviews: [
                        {
                            timestamp: `15 mins ago`,
                            tag: `item quality`,
                            reason: `Main reason would pretty much be all, nice clean code, easy to customise and work with. Commenting on each section is great, could not really ask for anything better. Top work!`,
                            author: {
                                avatar: `https://odindesignthemes.com/vikinger/img/avatar/05.jpg`,
                                fullname: `nick grissom`,
                            },
                            ratings: 4,
                        },
                        {
                            timestamp: `2 days ago`,
                            tag: `documentation`,
                            reason: `Best template I have ever had. Good documentation and code practices.`,
                            author: {
                                avatar: `https://odindesignthemes.com/vikinger/img/avatar/04.jpg`,
                                fullname: `bearded wanderer`,
                                account: `@beardedwanderer`,
                            },
                            ratings: 4,
                        },
                        {
                            timestamp: `4 weeks ago`,
                            tag: `item quality`,
                            reason: `5 stars for exceptional Customer Support (quick, precise, detailed responses to questions), but 5 stars also for Design Quality and Customization. It is a beautiful clean design that can easily be customized to your needs. I had really specific questions and I received detailed solutions very promptly. Thank you!`,
                            author: {
                                avatar: `https://odindesignthemes.com/vikinger/img/avatar/01.jpg`,
                                fullname: `sarah diamond`,
                                account: `@sarahdiamond`,
                            },
                            ratings: 5,
                        },
                    ],
                },
            },
        ]
    },
    mutations: {},
    getters: {
        GET_CATEGORIES: state => ({ key = false } = {}) => {
            if (!key) return state.categories;
            return state.categories.find(category => category.value.toLowerString() === key.toLowerString()) || false;
        },
        GET_ITEMS: state => ({ uuid = false, marketCategories = [], categories = [], tags = [] } = {}) => {
            if (uuid) return state.items.find(item => item.uuid == uuid) || false;
            return state.items.filter(item => marketCategories.includes(item.marketCategory)
                || categories.includes(item.category)
                || item.tags.filter( tag => tags.includes( tag )  )
            ) || []
        },
        GET_LATEST: state => {
            return state.items[0]
        }
    },
    actions: {}
};
