import { defineStore } from "pinia";
import { ref, watch } from "vue";
import type { Link } from "../model/link"

export const useLinkStore = defineStore("Links", () => {
    //Lógica: Tenta ler do localStorage. Caso não exista, cria uma lista vazia
    const savedLinks = localStorage.getItem("hub-links");
    const links = ref<Link[]>(savedLinks ? JSON.parse(savedLinks) : []);

    //Lógica: O 'watch' observa a lista de links. Ao adicionar ou deletar um link, ele salva automaticamente no navegador.
    watch(links, (newLinks) => {
        localStorage.setItem("hub-links", JSON.stringify(newLinks));
    }, { deep: true });

    function addLink(label: string, url: string, category: Link['category']) {
        links.value.push({
            id: crypto.randomUUID(), // Gera um ID único
            label, 
            url: url.startsWith('http') ? url : `https://${url}`,
            category
        });
    }

    function deleteLink(id: string) {
            links.value = links.value.filter(link => link.id !== id);
    }

    return { links, addLink, deleteLink };
})