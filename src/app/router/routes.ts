import AuthPage from "@/modules/auth/pages/AuthPage.vue";
import HubPage from "@/modules/hub/pages/HubPage.vue"; 
import AppLayout from "@/shared/layouts/AppLayout.vue";
import type { RouteRecordRaw } from "vue-router";

export const routes: RouteRecordRaw[] = [
  {
    name: "Auth",
    path: "/auth",
    component: AuthPage,
  },
  {
    path: "/",
    component: AppLayout,
    meta: { requiresAuth: true },
    children: [
      {
        name: "Dashboard",
        path: "",
        component: HubPage,
      },
    ],
  },
];