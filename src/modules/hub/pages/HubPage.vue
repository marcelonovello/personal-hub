<script setup lang="ts">
import { computed } from 'vue';
import { useLinkStore } from "../stores/linkStore";
import HubForm from "../components/HubForm.vue";
import { ref } from 'vue';

const showToast = ref(false);
const toastMessage = ref("");
const linkStore = useLinkStore();
const categories = ['estudo', 'trabalho', 'pessoal'] as const;

/**
 * Transformador de Dados (Data Transformer).
 * Deriva a estrutura de dados plana (array) para uma estrutura hierárquica (matriz),
 * permitindo a renderização por categorias de forma performática.
 */
const groupedLinks = computed(() => {
  return categories.map(cat => ({
    name: cat,
    items: linkStore.links.filter(l => l.category === cat)
  }));
});

/**
 * Gerenciador de Feedback Visual (Toast). 
 * Isola a lógica de temporização da interface de usuário.
 */
function notify(msg: string) {
  toastMessage.value = msg;
  showToast.value = true;
  setTimeout(() => showToast.value = false, 3000); 
}

function confirmDelete(id: string) {
  linkStore.deleteLink(id);
  notify("Link removido com sucesso!");
}
</script>