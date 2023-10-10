import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { stores as profile } from "../components/profile/js/index";
import { stores as auth } from "../components/auth/js/index";
import { stores as messenger } from "../components/messenger/js/index";

import { stores as marketplace } from "../components/marketplace/js";

export default new Vuex.Store({
  state: {
    navigation: [
        {
          alias: "profile" ,
          title: "my profile",
          header: true,
          description: "Change your avatar & cover, accept friends, read messages and more!",
          icon: "mdi-account-circle-outline",
          items: [
            {
              title: "personal info",
              url: { name: "settings.profile.personal" },
            },
            {
              title: "social & stream",
              url: { name: "settings.profile.socialandstream" },
            },
            {
              title: "notifications",
              url: { name: "settings.profile.notifications" },
            },
            {
              title: "messages",
              url: { name: "settings.profile.messenger" },
            },
            {
              title: "friend request",
              url: { name: "settings.profile.friendrequests" },
            }
          ]
        },
        {
          alias: "account" ,
          title: "account",
          header: true,
          description: "Change settings, configure notifications, and review your privacy.",
          icon: "mdi-cog-outline" ,
          items: [
            {
              title: "account info",
              url: { name: "settings.account.accountinfo" },
            },
            {
              title: "change password",
              url: { name: "settings.account.changepassword" },
            },
            {
              title: "general settings",
              url: { name: "settings.account.general" },
            }
          ]
        },
        {
          alias: "groups" ,
          title: "groups",
          header: true,
          description: "Create new groups, manage the ones you created or accept invites!",
          icon: "mdi-account-group-outline" ,
          items: [
            {
              title: "manage groups",
              url: { name: "settings.groups.managegroups" },
            },
            {
              title: "invitations",
              url: { name: "settings.groups.invitations" },
            }
          ]
        },
        {
          alias: "mystore" ,
          title: "my store",
          header: true,
          description: "Review your account, manage products check stats and much more!",
          icon: "mdi-storefront-outline" ,
          items: [
            {
              title: "my account",
              url: { name: "mystore.myaccount" },
              action: "$200"
            },
            {
              title: "sales statment",
              url: { name: "mystore.salesstatement" },
            },
            {
              title: "manage items",
              url: { name: "mystore.manageitems" },
            },
            {
              title: "downloads",
              url: { name: "mystore.downloads" },
            }
          ]
        }
      ],
    views: [
      {
        alias: "views.newsfeed",
        title: "newsfeed",
        url: { name: "views.newsfeed" },
        icon: "mdi-apps-box"
      },
      {
        alias: "views.overview",
        title: "overview",
        url: { name: "views.overview" },
        icon: "mdi-chart-timeline-variant-shimmer"
      },
      {
        alias: "views.groups",
        title: "groups",
        url: { name: "views.groups" },
        icon: "mdi-account-group-outline"
      },
      {
        alias: "views.members",
        title: "members",
        url: { name: "views.members" },
        icon: "mdi-account-multiple"
      },
      {
        alias: "views.badges",
        title: "badges",
        url: { name: "views.badges" },
        icon: "mdi-medal-outline"
      },
      {
        alias: "views.quests",
        title: "quests",
        url: { name: "views.quests" },
        icon: "mdi-star-face"
      },
      {
        alias: "views.streams",
        title: "streams",
        url: { name: "views.streams" },
        icon: "mdi-television-play"
      },
      {
        alias: "views.events",
        title: "events",
        url: { name: "views.events" },
        icon: "mdi-calendar-blank-outline"
      },
      {
        alias: "views.forums",
        title: "forums",
        url: { name: "views.forums" },
        icon: "mdi-forum-outline"
      },
      {
        alias: "views.marketplace",
        title: "marketplace",
        url: { name: "views.marketplace" },
        icon: "mdi-storefront-outline"
      }
    ]
  },
  getters: {
    GET_NAVIGATION: state => ({ module = false } = {}) => {
      if (module != false) return state.navigation.filter( nav => nav.alias === module);
      return state.navigation;
    },
    GET_VIEWS: state => {
      return state.views;
    }
  },
  mutations: {
  },
  actions: {

  },
  modules: {
    profile,
    auth,
    messenger,
    //
    marketplace
  }
})
