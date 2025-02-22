import { AntDesign } from "@expo/vector-icons";

type AntDesignIcons = keyof typeof AntDesign.glyphMap;

interface Route {
  title: string;
  name: string;
  icon: AntDesignIcons;
}

export const Routes: Array<Route> = [
  {
    title: "Properties",
    name: "index",
    icon: "home",
  },
  {
    title: "Search",
    name: "search",
    icon: "search1",
  },
  {
    title: "Activity",
    name: "activity",
    icon: "hearto",
  },
  {
    title: "Account",
    name: "account",
    icon: "user",
  },
];

export const ActivityRoutes: Array<Route> = [
  {
    title: "Recently viewed",
    name: "activity/recently-viewed",
    icon: "checkcircleo",
  },
  {
    title: "Contacted",
    name: "activity/contacted",
    icon: "message1",
  },
  {
    title: "Favorites",
    name: "activity/favorites",
    icon: "hearto",
  },
  {
    title: "Hidden",
    name: "activity/hidden",
    icon: "eyeo",
  },
  {
    title: "Alerts",
    name: "activity/alerts",
    icon: "bells",
  },
];

export const AccountConfigRoutes: Array<Route> = [
  {
    title: "Personal data",
    name: "account/personal-data",
    icon: "user",
  },
  {
    title: "Change password",
    name: "account/change-password",
    icon: "unlock",
  },
  {
    title: "Recommendations by mail",
    name: "activity/recommendations-by-mail",
    icon: "infocirlceo",
  },
];

export const AccountInfoRoutes: Array<Route> = [
  {
    title: "Terms and conditions of use",
    name: "account/terms-and-conditions-of-use",
    icon: "book",
  },
  {
    title: "Terms and conditions of contracting",
    name: "account/terms-and-conditions-of-contracting",
    icon: "book",
  },
  {
    title: "Privacy policies",
    name: "activity/Privacy-policies",
    icon: "copy1",
  },
];

export const AccountRoutes: Array<Route> = [
  {
    title: "Logout",
    name: "account/logout",
    icon: "logout",
  }
];