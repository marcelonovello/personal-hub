<script setup lang="ts">
import { reactive } from 'vue';

/**
 * Elevação de Estado (State Lifting).
 * Componente "Dumb" que apenas coleta dados e emite para o componente Pai (Page) processar.
 */
const emit = defineEmits(['add']);

const newLink = reactive({
  label: '',
  url: '',
  category: 'estudo' as 'estudo' | 'trabalho' | 'pessoal'
});

/**
 * Validação de Submissão.
 * Implementa Expressão Regular (Regex) para garantir a integridade estrutural das URLs inseridas.
 */
function handleSubmit() {
  const urlPattern = /^(https?:\/\/)?([\w\d-]+\.)+\w{2,}(\/.*)?$/;

  if (!urlPattern.test(newLink.url)) {
    alert("Por favor, insira uma URL válida."); 
    return;
  }

  if (newLink.label && newLink.url) {
    emit('add', { ...newLink });
    
    // Limpeza de cache local após submissão bem sucedida
    newLink.label = '';
    newLink.url = '';
  }
}
</script>