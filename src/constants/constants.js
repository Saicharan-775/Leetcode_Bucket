import {
  LayoutDashboard,
  Target,
  TrendingUp,
  Zap,
  BarChart,
  BookOpen,
  Menu,
  ClipboardClock,
  Flame,
  Settings,
  History,
  CircleCheck,
  Clock,
  CircleCheckBig,
} from "lucide-react";
export const reviewcards=[
  {
    title: "Total Problems",
    value: "10",
    icons: TrendingUp,
    bgColor: "#192a37",
    iconColor: "#1ba6ed",
  },
  {
    title: "Strict Bucket",
    value: "4",
    icons: Target,
    bgColor: "#2e2723",
    iconColor: "#ff922b",
  },
     {
    title: "Normal Mode",
    value: "6",
    icons: Zap,
    bgColor: "#172d35",
    iconColor: "#03c4d3",
  },
   {
    title: "Completed",
    value: "6",
    icons: CircleCheck,
    bgColor: "#1b2d23",
    iconColor: "#30c032",
  },
]
//------------------------------this is StatCards  ---------------------------------------------------------------------------------
 export const statCards = [
  {
    title: "Total Problems",
    value: "100",
    icons: TrendingUp,
    bgColor: "#192a37",
    iconColor: "#1ba6ed",
  },
  {
    title: "Strict Mode",
    value: "20",
    icons: Target,
    bgColor: "#2e2723",
    iconColor: "#ff922b",
  },
  {
    title: "Normal Mode",
    value: "125",
    icons: Zap,
    bgColor: "#172d35",
    iconColor: "#03c4d3",
  },
  {
    title: "Avg Review Time",
    value: "18",
    icons: Clock,
    bgColor: "#2f2a21",
    iconColor: "#daad1e",
  },
  {
    title: "Success Rate",
    value: "87%",
    icons: CircleCheckBig, 
    bgColor: "#1a2d22",
    iconColor: "#31b931",
  },
];
//--------------------SideBar sections---------------------------------------
  export const sections = [
    {
      heading: "Navigation",
      links: [
        { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
        { name: "Today's Revision", path: "/revision-queue", icon: ClipboardClock },
      ],
    },
    {
      heading: "Buckets",
      links: [
        { name: "Strict Mode", path: "/strict-bucket", icon: Target, color: "#fd6a21" },
        { name: "Normal Mode", path: "/normal-bucket", icon: Zap, color: "#10bff5" },
      ],
    },
    {
      heading: "Progress",
      links: [
        { name: "Analytics", path: "/analysis", icon: BarChart },
        { name: "Problem History", path: "/history", icon: History },
      ],
    },
    {
      heading: "More",
      links: [
        { name: "Resources", path: "/resourses", icon: BookOpen },
        { name: "Settings", path: "/settings", icon: Settings },
      ],
    },
  ];
