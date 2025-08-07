# Plano de Estudos de Programação - Site Interativo

Um site responsivo e interativo para acompanhar o progresso de estudos de programação Python, com design inspirado nas cores oficiais do Python.

## 🚀 Funcionalidades

- **Interface Responsiva**: Adapta-se perfeitamente a desktop, tablet e mobile
- **Progresso Interativo**: Marque módulos como concluídos com um clique
- **Persistência Local**: Seu progresso é salvo automaticamente no navegador
- **Design Python**: Cores oficiais do Python (#3776ab e #ffd43b)
- **Organização por Categorias**: Módulos agrupados por área de conhecimento
- **Animações Suaves**: Transições e feedback visual ao completar módulos
- **Celebração**: Animação especial ao completar todos os módulos

## 📚 Estrutura do Plano

O plano está organizado em 6 categorias principais:

1. **Essencial (Módulos 1-3)**: Base fundamental
2. **Padrões e Redes (Módulos 4-5)**: Arquitetura e comunicação
3. **APIs (Módulos 6-8)**: REST, GraphQL e microsserviços
4. **Framework Django (Módulos 9-10)**: Desenvolvimento web
5. **Front-end (Módulo 11)**: Interface de usuário
6. **Deploy (Módulo 12)**: Publicação e CI/CD

## 🛠️ Como Executar

### Pré-requisitos
- Node.js 18+ instalado
- npm ou pnpm

### Instalação e Execução
```bash
# Navegar para o diretório do projeto
cd plano-estudos-site

# Instalar dependências (se necessário)
npm install

# Executar em modo de desenvolvimento
npm run dev

# O site estará disponível em http://localhost:5173
```

### Build para Produção
```bash
# Gerar build otimizado
npm run build

# Visualizar build localmente
npm run preview
```

## 🎨 Tecnologias Utilizadas

- **React 18**: Framework principal
- **Vite**: Build tool e dev server
- **Tailwind CSS**: Estilização responsiva
- **Shadcn/UI**: Componentes de interface
- **Lucide React**: Ícones
- **Framer Motion**: Animações (disponível)

## 📱 Responsividade

O site foi desenvolvido com abordagem mobile-first e inclui:

- **Desktop (1024px+)**: Layout em grid de 3 colunas
- **Tablet (768px-1023px)**: Layout em grid de 2 colunas
- **Mobile (<768px)**: Layout em coluna única

## 💾 Persistência de Dados

O progresso é automaticamente salvo no `localStorage` do navegador, permitindo que você:
- Feche e reabra o navegador mantendo o progresso
- Navegue entre páginas sem perder dados
- Use o site offline após o primeiro carregamento

## 🎯 Como Usar

1. **Visualizar Módulos**: Cada card mostra o conteúdo do módulo
2. **Marcar como Concluído**: Clique no botão circular para marcar/desmarcar
3. **Acompanhar Progresso**: Veja o progresso geral no header
4. **Seguir a Trilha**: Use as instruções coloridas como guia

## 🎨 Paleta de Cores

- **Azul Python**: #3776ab (cor principal)
- **Amarelo Python**: #ffd43b (cor de destaque)
- **Verde Sucesso**: #48bb78 (módulos concluídos)
- **Cores de Categoria**: Cada categoria tem sua cor específica

## 📄 Licença

Este projeto foi desenvolvido como uma ferramenta educacional para organizar estudos de programação Python.

