<script setup lang="ts">
import MenuItem from "./MenuItem.vue";

/**
 * Configuração centralizada da navegação lateral.
 * Facilita a expansão do sistema: basta adicionar um novo objeto ao array 
 * para refletir em toda a interface.
 */
const menuItems = [
  { label: 'Início', icon: 'pi pi-home', to: '/' }
];
</script>

<template>
  <nav class="flex flex-col gap-2 p-4">
    <div class="mb-4 px-4 text-xs font-bold text-zinc-600 uppercase tracking-widest">
      Principal
    </div>

    <MenuItem
      v-for="item in menuItems"
      :key="item.to"
      :label="item.label"
      :icon="item.icon"
      :to="item.to"
    />
  </nav>
</template>