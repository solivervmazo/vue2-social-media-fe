import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store/";

import vHome from "../components/home/Home.vue";
import vSignup from "../components/home/Signup.vue";
import vLogin from "../components/home/Login.vue";
import vDashboard from "../components/dashboard/Dashboard.vue";
import vSettings from "../components/dashboard/Settings.vue";


import vSettingsProfile from "../components/profile/Profile.vue";
import vPersonalSettings from "../components/profile/templates/PersonalSettings.vue";
import vSocialAndStreamSettings from "../components/profile/templates/SocialAndStreamSettings";
import vNotificationsSettings from "../components/profile/templates/Notifications.vue";
import vMessenger from "../components/messenger/Messenger.vue";
import vFriendRequests from "../components/profile/templates/FriendRequests.vue";

import vSettingsAccount from "../components/account/Account.vue";
import vAccountInformationSettings from "../components/account/templates/AccountInformationSettings.vue";
import vChangePasswordSettings from "../components/account/templates/ChangePasswordSettings.vue";
import vGeneralSettings from "../components/account/templates/GeneralSettings.vue";

import vGroups from "../components/community/Groups.vue";
import vManageGroups from "../components/community/components/ManageGroups.vue";
import vGroupInvitations from "../components/community/components/Invitations.vue";


import vMyStore from "../components/mystore/MyStore.vue";
import vMyStoreMyAccounts from "../components/mystore/templates/MyAccount.vue";
import vMyStoreSalesStatement from "../components/mystore/templates/SalesStatement.vue";
import vMyStoreManageItems from "../components/mystore/templates/ManageItems.vue";
import vMyStoreDownloads from "../components/mystore/templates/Downloads.vue";

//views
import vNewsfeedIndex from "../components/newsfeed/NewsFeedIndex.vue";
import vOverViewIndex from "../components/profile/OverviewIndex.vue";
import vGroupsIndex from "../components/community/GroupsIndex.vue";
import vMembersIndex from "../components/community/MembersIndex.vue";
import vBadgesIndex from "../components/games/BadgesIndex.vue";
import vQuestsIndex from "../components/games/QuestsIndex.vue";
import vStreamsIndex from "../components/streams/StreamsIndex.vue";
import vEventsIndex from "../components/events/EventsIndex.vue";
import vForumsIndex from "../components/community/ForumsIndex.vue";
import vMarketplaceIndex from "../components/marketplace/MarketplaceIndex.vue";
import vTimelineIndex from "../components/timeline/TimelineIndex.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/overview",
    name: "views.overview",
    component: vOverViewIndex,
  },
  {
    path: "/groups",
    name: "views.groups",
    component: vGroupsIndex,
  },
  {
    path: "/members",
    name: "views.members",
    component: vMembersIndex,
  },
  {
    path: "/badges",
    name: "views.badges",
    component: vBadgesIndex,
  },
  {
    path: "/quests",
    name: "views.quests",
    component: vQuestsIndex,
  },
  {
    path: "/streams",
    name: "views.streams",
    component: vStreamsIndex,
  },
  {
    path: "/events",
    name: "views.events",
    component: vEventsIndex,
  },
  {
    path: "/forums/:category?/:sub?",
    name: "views.forums",
    component: vForumsIndex,
  },
  {
    path: "/marketplace/:item?",
    name: "views.marketplace",
    component: vMarketplaceIndex,
  },
  //
  {
    path: "/settings",
    name: "settings",
    component: vSettings,
    redirect: { name: 'settings.profile' },
    children: [
      {
        path: "profile",
        name: "settings.profile",
        component: vSettingsProfile,
        redirect: { name: 'settings.profile.personal' },
        children: [
          {
            path: "personal",
            name: "settings.profile.personal",
            component: vPersonalSettings,
          },
          {
            path: "socialandstream",
            name: "settings.profile.socialandstream",
            component: vSocialAndStreamSettings,
          },
          {
            path: "notifications",
            name: "settings.profile.notifications",
            component: vNotificationsSettings,
          },
          {
            path: "friendrequests",
            name: "settings.profile.friendrequests",
            component: vFriendRequests,
          },
          {
            path: "messenger",
            name: "settings.profile.messenger",
            component: vMessenger,
          }
        ]
      },
      {
        path: "account",
        name: "settings.account",
        component: vSettingsAccount,
        redirect: { name: 'settings.account.accountinfo' },
        children: [
          {
            path: "accountinfo",
            name: "settings.account.accountinfo",
            component: vAccountInformationSettings,
          },
          {
            path: "security",
            name: "settings.account.changepassword",
            component: vChangePasswordSettings,
          },
          {
            path: "general",
            name: "settings.account.general",
            component: vGeneralSettings,
          },
        ]
      },
      {
        path: "groups",
        name: "settings.groups",
        component: vGroups,
        redirect: { name: 'settings.groups.managegroups' },
        children: [
          {
            path: "managegroups",
            name: "settings.groups.managegroups",
            component: vManageGroups,
          },
          {
            path: "invitations",
            name: "settings.groups.invitations",
            component: vGroupInvitations,
          },
        ]
      }
    ]
  },
  {
    path: "/mystore",
    name: "mystore",
    component: vMyStore,
    redirect: { name: 'mystore.myaccount' },
    children: [
      {
        path: "myaccount",
        name: "mystore.myaccount",
        component: vMyStoreMyAccounts,
      },
      {
        path: "salesstatement",
        name: "mystore.salesstatement",
        component: vMyStoreSalesStatement,
      },
      {
        path: "manageitems",
        name: "mystore.manageitems",
        component: vMyStoreManageItems,
      },
      {
        path: "downloads",
        name: "mystore.downloads",
        component: vMyStoreDownloads,
      },
    ]
  },
  {
    path: "/home",
    name: "home",
    component: vHome,
    redirect: { name: "login" },
    children: [
      {
        path: "signup",
        name: "signup",
        component: vSignup,
      }, {
        path: "login",
        name: "login",
        component: vLogin,
      }
    ]
  },
  {
    path: "/",
    component: vDashboard,
    children: [
      {
        path: "",
        name: "views.newsfeed",
        component: vNewsfeedIndex,
      },
      {
        path: "/:profile",
        name: "views.profile",
        component: vTimelineIndex,
      },
    ]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach(async (to, from, next) => {
  const authed = await store.dispatch("auth/authed");
  window.scrollTo(0, 0)
  if (authed) {
    if (['signup', 'login'].includes(to.name) || ['signup', 'login'].includes(to.path)) {
      next({ name: 'dashboard' });
    } else {
      next();
    }
  } else {
    // if (!['dashboard'].includes(to.name) ) next({ path: 'login' });
    // if (!['signup', 'login'].includes(to.name) ) next({ path: 'login' });
    // if (!['signup', 'login'].includes(to.path) ) next({ path: 'login' });
    next();
  }
});

export default router;
