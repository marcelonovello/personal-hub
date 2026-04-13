import AuthPage from "@/modules/auth/pages/AuthPage.vue";
import HubPage from "@/modules/hub/pages/HubPage.vue"; 
import AppLayout from "@/shared/layouts/AppLayout.vue";
import type { RouteRecordRaw } from "vue-router";

/*
 * Árvore central de rotas da aplicação. Utiliza o padrão "Nested Routes" (Rotas Aninhadas) para reaproveitamento de UI.
 */
export const routes: RouteRecordRaw[] = [
  {
    name: "Auth",
    path: "/auth",
    component: AuthPage,
  },
  {
    path: "/",
    component: AppLayout, // Atua como um "wrapper" (Header/Menu) para as páginas filhas
    meta: { requiresAuth: true }, // Define que toda essa sub-árvore exige autenticação
    children: [
      {
        name: "Dashboard",
        path: "", 
        component: HubPage,
      },
    ],
  },
];