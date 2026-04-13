<script setup lang="ts">
/**
 * Contrato de propriedades do item de menu.
 * @property label Texto a ser exibido.
 * @property to Rota de destino (Vue Router).
 * @property icon Classe de ícone (ex: PrimeIcons).
 */
interface MenuItemProps {
  label: string;
  to: string;
  icon?: string;
}

defineProps<MenuItemProps>();
</script>

<template>
  <RouterLink 
    :to="to" 
    class="flex items-center gap-3 px-4 py-3 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800/50 transition-all group"
    active-class="bg-zinc-800 text-white font-semibold shadow-sm"
  >
    <i v-if="icon" :class="[icon, 'text-lg group-hover:scale-110 transition-transform']"></i>
    <span>{{ label }}</span>
  </RouterLink>
</template>