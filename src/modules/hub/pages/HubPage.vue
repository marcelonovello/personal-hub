<script setup lang="ts">
import { computed } from 'vue';
import { useLinkStore } from "../stores/linkStore";
import HubForm from "../components/HubForm.vue";
import { ref } from 'vue';

const showToast = ref(false);
const toastMessage = ref("");
const linkStore = useLinkStore();
const categories = ['estudo', 'trabalho', 'pessoal'] as const;
const groupedLinks = computed(() => {
  return categories.map(cat => ({
    name: cat,
    items: linkStore.links.filter(l => l.category === cat)
  }));
});

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

<template>
  <div class="p-8 max-w-6xl mx-auto">
    <header class="mb-10">
      <h1 class="text-3xl font-black text-white">Dashboard do Marcelo</h1>
      <p class="text-zinc-500">Organização rápida para estudos e projetos.</p>
    </header>

    <HubForm @add="(l: any) => linkStore.addLink(l.label, l.url, l.category)" />

    <div v-for="group in groupedLinks" :key="group.name" class="mb-10">
      <h2 class="text-zinc-400 uppercase text-xs font-bold tracking-widest mb-4 flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-blue-500"></span>
        {{ group.name }}
      </h2>
      
      <div v-if="group.items.length" class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div 
          v-for="link in group.items" 
          :key="link.id" 
          class="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:scale-[1.02] transition-transform group"
        >
          <div class="flex justify-between items-start">
            <span class="text-white font-medium">{{ link.label }}</span>
            <button 
              @click="confirmDelete(link.id)" 
              class="text-zinc-600 hover:text-red-400 transition-colors"
              title="Remover Link"
            >
              ✕
            </button>
          </div>
          <a 
            :href="link.url" 
            target="_blank" 
            class="text-sm text-blue-500 hover:underline mt-2 block truncate"
          >
            {{ link.url }}
          </a>
        </div>
      </div>

      <p v-else class="text-zinc-700 italic text-sm">
        Nenhum link salvo em "{{ group.name }}".
      </p>
    </div>
  </div>

  <Transition name="fade">
    <div v-if="showToast" 
         class="fixed bottom-10 right-10 bg-zinc-800 text-white px-6 py-3 rounded-lg border border-zinc-700 shadow-2xl z-50">
      {{ toastMessage }}
    </div>
  </Transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style>
