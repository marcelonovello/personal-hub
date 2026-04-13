import { createRouter, createWebHistory } from "vue-router";
import { routes } from "./routes";
import { useAuthStore } from "@/modules/auth/stores/auth";

/**
 * Instância global do Vue Router. Configurada com HTML5 History Mode para URLs limpas.
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

/**
 * Global Navigation Guard (Interceptador de Rotas).
 * Regras de segurança e fluxo de usuário implementadas antes de cada navegação:
 * 1. Proteção de Rotas Privadas: Impede usuários deslogados de acessar áreas internas (requiresAuth).
 * 2. Prevenção de Redundância: Redireciona usuários já logados que tentam acessar a tela de Login ("Auth") 
 * para a Home (ou para a rota que tentavam acessar originalmente).
 */
router.beforeEach(async (to) => {
  const authStore = useAuthStore();

  if (
    to.name !== "Auth" &&
    to.meta.requiresAuth &&
    !authStore.isAuthenticated
  ) {
    // Salva a rota de destino para redirecionamento futuro após o login
    return { name: "Auth", query: { redirect: to.fullPath } };
  }

  if (authStore.isAuthenticated && to.name === "Auth") {
    const redirect = (to.query.redirect as string) ?? { name: "Dashboard" };
    return redirect;
  }
});

export default router;