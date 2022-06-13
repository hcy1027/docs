// nav 配置, 即上方导航栏

import { NavItem } from "vuepress/config";

export default <Array<NavItem>>[
  { text: "主页", link: "/" },
  {
    text: "编程语言",
    items: [
      {
        text: "Java",
        link: "/pages/javase/index/",
      },
      {
        text: "JavaScript",
        link: "/pages/javascript/index/",
      },
      {
        text: "Python",
        link: "/python/",
      },
      {
        text: "C",
        link: "/c/",
      },
    ],
  },
  {
    text: "基础学科",
    items: [
      {
        text: "高等数学",
        link: "/advmath/",
      },
      {
        text: "线性代数",
        link: "/la/",
      },
      {
        text: "英语",
        link: "/english/",
      },
    ],
  },
];
