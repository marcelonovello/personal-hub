/**
 * Entidade de Domínio: Usuário.
 * Define o contrato de dados para a sessão autenticada.
 * A senha é opcional na interface pois não deve ser trafegada ou mantida no estado global (Pinia) após o login.
 */
export interface User {
  id: string;
  name: string;
  email: string;
  password?: string;
}