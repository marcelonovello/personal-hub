<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";
import Loading from "@/shared/components/Loading.vue";

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

//Orquestra o fluxo de login e gerencia a transição de estado.
async function handleLogin() {
  await authStore.login("marcelonovello@hotmail.com", "123456");
  redirect();
}

/**
 * Resolve o redirecionamento pós-login.
 * Analisa a query string para devolver o usuário à página que tentava acessar,
 * implementando um fallback seguro para "/" para evitar falhas de navegação.
 */
async function redirect() {
  const q = route.query.redirect as string;
  const r = typeof q === "string" && q.startsWith("/") ? q : "/";
  await router.replace(r);
}
</script>