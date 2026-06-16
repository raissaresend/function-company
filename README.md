# Function Company | Front-end Architecture

Este repositório contém a arquitetura Front-end completa de um e-commerce voltado para o nicho de streetwear high-end. O projeto foi desenhado e estruturado do zero para entregar uma experiência de navegação imersiva, combinando design brutalista com alta performance e responsividade ponta a ponta.

## Arquitetura e Escopo do Projeto

O desenvolvimento foi guiado pelos princípios de "Anti-Design" e utilitarismo, focando em performance extrema através da redução de requisições de rede e manipulação avançada de DOM.

* **Arquitetura Single Page Application (SPA):** Gestão completa de rotas via React Router DOM, permitindo transições instantâneas entre a Home, Catálogo de Produtos e a página Institucional.
* **Design System Customizado:** Implementação de um tema estrito (Pure Black, White e Brand Yellow) configurado diretamente no ecossistema do Tailwind CSS, garantindo consistência visual em todos os componentes.
* **Global Layout Wrapper:** Um componente mestre que envelopa a aplicação, injetando elementos persistentes como o Header (com efeito Glassmorphism) e o Announcement Bar (Marquee infinito construído em CSS puro).
* **Renderização Otimizada:** Redução drástica do First Contentful Paint (FCP) através da substituição de banners de imagem tradicionais por grids tipográficas complexas. Uso exclusivo de SVGs inline para ícones e favicons, eliminando a dependência de bibliotecas de ícones externas.
* **Componentes Interativos e Dinâmicos:** 
  * Filtros de catálogo gerenciados nativamente através do estado do React.
  * Integração de mídias externas (Iframes do YouTube e Google Maps) com camadas de proteção de eventos para garantir consistência de estados de hover entre dispositivos Desktop e Mobile.
  * Sistema de footer modularizado com formulário utilitário de newsletter.

## Stack Tecnológica

* **React** (via Vite para build otimizado e fast refresh)
* **Tailwind CSS** (estilização utilitária e design responsivo fluido)
* **React Router DOM** (roteamento do lado do cliente)
* **Git / GitHub** (versionamento de código)

## Instruções de Execução Local

Para inicializar a aplicação no seu ambiente de desenvolvimento, siga os comandos abaixo:

1. Clone o repositório:
```bash
   git clone [https://github.com/raissaresend/function-company.git](https://github.com/raissaresend/function-company.git)