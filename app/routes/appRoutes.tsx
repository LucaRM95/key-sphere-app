import { AntDesign } from "@expo/vector-icons";

type AntDesignIcons = keyof typeof AntDesign.glyphMap;

interface Route {
  title: string;
  name: string;
  icon: AntDesignIcons;
}

const Routes: Array<Route> = [
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
    title: "Profile",
    name: "profile",
    icon: "user",
  },
];

export default Routes