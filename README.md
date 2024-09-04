## Descrição
Este projeto é uma aplicação React configurada com Vite que tem como objetivo exibir produtos provenientes de uma API. Os usuários podem navegar pelos produtos, adicionar itens ao carrinho de compras e ajustar quantidades e até removê-los do carrinho. O projeto segue os princípios de Arquitetura Limpa e utiliza o Composition Pattern para promover a reutilização de componentes e lógica, facilitando a manutenção e escalabilidade do projeto.

## 🚀 Como Rodar o Projeto
```bash
# Clone o repositório
git clone https://github.com/clauds-macedo/itemize.git

# Acesse a pasta do projeto pelo terminal
cd itemize

# Instale as dependências
yarn

# Execute a aplicação em modo de desenvolvimento
yarn dev

# A aplicação vai ser aberta na porta:3000 - acesse http://localhost:3000
```

## Funcionalidades
- Página de Produtos: Exibe uma lista de produtos disponíveis, com a funcionalidade de adicionar ao carrinho.
- Carrinho de Compras: Permite visualizar os produtos adicionados ao carrinho, com opções para ajustar quantidades e remover o item do carrinho.
- Componentes Escaláveis: O componente Card foi feito utilizando Composition Pattern, garantindo que a aplicação não sofra com [**Prop Drilling**](https://www.freecodecamp.org/news/prop-drilling-in-react-explained-with-examples/), podendo ser utilizado de diversas maneiras.
- Lógica Compartilhada: O projeto utiliza hooks como useCartActions e useProducts para compartilhar lógica entre diferentes componentes de forma eficiente.

## 🛠️ Tecnologias Utilizadas
- React
- Vite
- TypeScript
- Jest
- ESLint
- Tailwind CSS
- Zustand
- Axios
- React Router
- React Toastify
- Testing Library (React, DOM, Hooks)
- Prettier

## Padrões Utilizados
### Composition Pattern
O projeto adota o Composition Pattern em sua arquitetura de componentes, permitindo que pequenos componentes sejam combinados para criar componentes mais complexos. Isso torna o código mais modular e reutilizável.
Por exemplo:
- O componente Card pode ser usado em diferentes contextos para exibir produtos, resumos de compras, entre outros, sem a necessidade de duplicar código.
- Caso precisemos adicionar um novo ícone em uma posição específica do Card, não é necessário criar uma nova prop no componente de Card para verificar se o ícone foi passado como parâmetro.
Em resumo, o Composition Pattern permite que a lógica seja desacoplada da UI, facilitando a manutenção e evolução do projeto.
### Custom Hooks Pattern
Para o reuso de funcionalidades entre telas/componentes num contexto reativo, foi utilizado o Custom Hooks Pattern do React. Os hooks useCartActions e useProducts, por exemplo, encapsulam a lógica de negócios que pode ser reutilizada por várias partes do projeto (que envolvam a interação do usuário com a UI) a medida que a aplicação cresce.

## Estrutura do Projeto
```bash
├── src                         # Código-fonte do projeto
│   ├── assets                  # Recursos estáticos como imagens
│   ├── domain                  # Camada de domínio (regras de negócio)
│   │   └── entities            # Entidades e objetos de valor
│   ├── infra                   # Infraestrutura (acesso a dados, APIs)
│   │   └── repositories        # Implementações dos repositórios
│   ├── main                    # Infraestrutura e lógica da aplicação
│   │   ├── factories           # Fábricas para criação de serviços (Factory Pattern)
│   │   ├── routes              # Definição das rotas da aplicação (React Router)
│   │   └── stores              # Gerenciamento de estado global (State Management)
│   ├── presentation            # Camada de apresentação (UI e componentes React)
│   │   ├── components          # Componentes reutilizáveis (Card, PageTitle)
│   │   ├── hooks               # Hooks reutilizáveis (useCartActions, useProducts)
│   │   └── pages               # Páginas da aplicação (Cart, Products)
│   ├── __tests__               # Testes unitários do projeto
│   ├── App.jsx                 # Componente principal do App
│   ├── index.css               # Estilos globais
│   ├── main.jsx                # Arquivo de entrada da aplicação
├── .vscode                     # Configurações locais do VS Code
```
## Otimizações de Desempenho:
### Update da quantidade de itens no carrinho em O(1):
- O método updateQuantity é capaz de atualizar a quantidade de um produto no carrinho em tempo constante (O(1)), em vez de percorrer um array de itens.
- Isso é possível porque o carrinho é representado como um objeto, onde a chave é o id do produto, permitindo acesso direto ao item. Assim, a busca por um produto no carrinho não precisa percorrer uma lista, mas sim acessar diretamente pelo seu id, o que torna a operação muito mais eficiente.
### Adição e Remoção de Itens em O(1):
- A operação de adicionar ou remover um item do carrinho também ocorre em O(1), já que ambas as operações envolvem diretamente o uso do id do produto como chave no objeto do carrinho.
- Adicionar um item é feito criando ou atualizando diretamente a chave correspondente ao produto no objeto, e remover é simplesmente excluir a chave com delete.
