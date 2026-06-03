import { createRouter, RouteRecordRaw, createWebHistory } from "vue-router";
import { accountInfo, login } from "@/hooks/use-login";

export const headMenus: (RouteRecordRaw & { title: string })[] = [
  {
    path: "/",
    title: "home.home",
    component: () => import("@/pages/home/index.vue"),
  },
  {
    path: "/terms",
    title: "",
    meta: { withoutHeader: false },
    component: () => import("@/pages/TermsofUse"),
  },
  {
    path: "/privacy",
    title: "",
    meta: { withoutHeader: false },
    component: () => import("@/pages/Privacy"),
  },
];

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "home",
    component: () => import("@/pages/home/index.vue"),
  },
  ...headMenus,
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

router.beforeEach(() => {
  window.scrollTo({
    top: 0,
  });
});

router.afterEach((to, from) => {
  if (to.path.includes('/app')) {
    console.log('进入了 /app 路由')
    // 可以跳转或执行其他逻辑
    window.location.replace("https://app.noldai.cz/app");
  }
})

export default router;
