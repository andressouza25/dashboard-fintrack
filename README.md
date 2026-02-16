# Fintrack - Finance Dashboard

Fintrack é uma aplicação moderna para gestão financeira pessoal, permitindo aos usuários acompanhar transações, visualizar saldo e gerenciar suas finanças de forma simples e intuitiva.

## 🚀 Live Demo

Acesse a aplicação em produção:
[https://fintrack-nu-rosy.vercel.app](https://fintrack-nu-rosy.vercel.app)

<img width="1898" height="905" alt="image" src="https://github.com/user-attachments/assets/5a6214f2-b857-4c06-903b-0bdcd0ff83c9" />

## ✨ Funcionalidades

- **Dashboard Financeiro**: Visão geral do saldo atual e movimentações.
- **Gestão de Transações**:
  - Adicionar novas receitas e despesas.
  - Editar e remover transações existentes.
  - Visualização em tabela com filtros.
- **Autenticação**: Login e Cadastro de usuários seguros.
- **Filtro por Período**: Seleção de datas para visualização de dados específicos.
- **Responsividade**: Layout adaptável para diferentes tamanhos de tela.

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Frontend**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Estilização**: [TailwindCSS](https://tailwindcss.com/)
- **Componentes UI**: [Radix UI](https://www.radix-ui.com/) / [Shadcn UI](https://ui.shadcn.com/)
- **Gerenciamento de Estado/Dados**: [TanStack Query (React Query)](https://tanstack.com/query/latest)
- **Roteamento**: [React Router](https://reactrouter.com/)
- **Formulários**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Requisições HTTP**: [Axios](https://axios-http.com/)
- **Ícones**: [Lucide React](https://lucide.dev/)

## 📦 Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente:

1.  **Clone o repositório**:
    ```bash
    git clone https://github.com/andressouza25/dashboard-fintrack.git
    cd dashboard-fintrack
    ```

2.  **Instale as dependências**:
    ```bash
    npm install
    ```

3.  **Execute o servidor de desenvolvimento**:
    ```bash
    npm run dev
    ```

4.  **Acesse a aplicação**:
    Abra seu navegador em `http://localhost:5173`.

## 🚀 Deploy

O deploy foi realizado na plataforma **Vercel** com configurações específicas para Single Page Application (SPA) e Proxy de API.

### Configuração de Proxy (Vercel)

Para evitar erros de CORS e garantir a comunicação correta com o backend, foi configurado um arquivo `vercel.json` que redireciona as chamadas da API:

```json
{
  "rewrites": [
    {
      "source": "/api/(.*)",
      "destination": "https://finance-app-api-rbub.onrender.com/api/$1"
    },
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 📝 Licença

Este projeto está sob a licença MIT.
