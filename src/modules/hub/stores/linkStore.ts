import { defineStore } from "pinia";
import { ref, watch } from "vue";
import type { Link } from "../model/link"

/**
 * Store do Hub de Links (Pinia).
 * Gerencia a coleção de recursos e implementa o padrão de Cache Local (Persistence).
 */
export const useLinkStore = defineStore("Links", () => {
    // Hidratação de Estado: Tenta recuperar o cache; caso contrário, inicia coleção vazia.
    const savedLinks = localStorage.getItem("hub-links");
    const links = ref<Link[]>(savedLinks ? JSON.parse(savedLinks) : []);

    /**
     * Sincronização Reativa (Persistence Effect).
     * O 'watch' com { deep: true } observa mutações internas do array (push/splice)
     * e sincroniza o estado global com a API do navegador (LocalStorage) automaticamente.
     */
    watch(links, (newLinks) => {
        localStorage.setItem("hub-links", JSON.stringify(newLinks));
    }, { deep: true });

    /**
     * Insere um novo recurso na coleção.
     * Implementa validação UX injetando 'https://' caso o usuário omita o protocolo.
     */
    function addLink(label: string, url: string, category: Link['category']) {
        links.value.push({
            id: crypto.randomUUID(), // Delegação ao Web API para IDs únicos sem dependências externas
            label, 
            url: url.startsWith('http') ? url : `https://${url}`,
            category
        });
    }

    // Remove um recurso da coleção baseado em seu identificador único.
    function deleteLink(id: string) {
            links.value = links.value.filter(link => link.id !== id);
    }

    return { links, addLink, deleteLink };
})