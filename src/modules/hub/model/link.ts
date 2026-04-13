/**
 * Entidade de Domínio: Link.
 * A propriedade 'category' utiliza Literal Types para garantir type safety
 * estrito durante a classificação dos recursos no dashboard.
 */
export interface Link {
    id: string;
    label: string;
    url: string;
    category: 'estudo' | 'trabalho' | 'pessoal'
}