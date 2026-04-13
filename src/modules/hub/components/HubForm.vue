<script setup lang="ts">
import { reactive } from 'vue';

const emit = defineEmits(['add']);

// Estado reativo local para o formulário
const newLink = reactive({
  label: '',
  url: '',
  category: 'estudo' as 'estudo' | 'trabalho' | 'pessoal'
});

function handleSubmit() {
  const urlPattern = /^(https?:\/\/)?([\w\d-]+\.)+\w{2,}(\/.*)?$/;

  if (!urlPattern.test(newLink.url)) {
    alert("Por favor, insira uma URL válida."); 
    return;
  }

  if (newLink.label && newLink.url) {
    emit('add', { ...newLink });
    newLink.label = '';
    newLink.url = '';
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="bg-zinc-900/50 p-6 rounded-2xl border border-zinc-800 mb-8 flex flex-col md:flex-row gap-4">
    <input 
      v-model="newLink.label" 
      type="text" 
      placeholder="Nome (ex: Petrobras)" 
      class="flex-1 bg-zinc-950 border border-zinc-800 p-3 rounded-lg text-white focus:border-blue-500 outline-none transition-colors"
      required
    />
    
    <input 
      v-model="newLink.url" 
      type="text" 
      placeholder="URL (ex: google.com)" 
      class="flex-1 bg-zinc-950 border border-zinc-800 p-3 rounded-lg text-white focus:border-blue-500 outline-none transition-colors"
      required
    />

    <select 
      v-model="newLink.category" 
      class="bg-zinc-950 border border-zinc-800 p-3 rounded-lg text-zinc-400 outline-none focus:border-blue-500"
    >
      <option value="estudo">Estudo</option>
      <option value="trabalho">Trabalho</option>
      <option value="pessoal">Pessoal</option>
    </select>

    <button type="submit" class="bg-blue-600 hover:bg-blue-500 text-white font-bold px-8 py-3 rounded-lg transition-all active:scale-95">
      Adicionar
    </button>
  </form>
</template>