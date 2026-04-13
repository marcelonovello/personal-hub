import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { User } from "../model/user";

/**
 * Store de Autenticação (Pinia).
 * Responsável por gerenciar o ciclo de vida da sessão do usuário e 
 * prover o estado de autenticação para as guardas de rota (Router).
 */
export const useAuthStore = defineStore("auth", () => {
  const user = ref<User | null>(null);
  const isLoading = ref(false);
  
  // Computed property derivada que otimiza a verificação de sessão nas rotas
  const isAuthenticated = computed(() => !!user.value);

  /**
   * Executa a autenticação do usuário.
   * @param email Email do usuário
   * @param password Senha do usuário
   */
  async function login(email: string, password: string) {
    try {
      isLoading.value = true;
      // Mock de latência de rede (Simulação de requisição HTTP)
      await new Promise((resolve) => setTimeout(resolve, 3000));
      user.value = {
        id: "1",
        name: "marcelonovello",
        email: email,
      };
    } finally {
      isLoading.value = false;
    }
  }

  /**
   * Encerra a sessão atual e limpa o estado global.
   */
  async function logout() {
    try {
      isLoading.value = true;
      await new Promise((resolve) => setTimeout(resolve, 1000));
      user.value = null;
    } finally {
      isLoading.value = false;
    }
  }

  return { user, isLoading, isAuthenticated, login, logout };
});