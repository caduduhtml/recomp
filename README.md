# Tríade — versão recodificada

Projeto original recodificado para **React + TypeScript + HTML/CSS**, sem PHP.

## O que foi preservado
- Portal principal Gerenciador de Conteúdos.
- Identidades e páginas-base de **Gelacionado**, **Studio Verso** e **Eletro Instal**.
- Catálogo, carrinho, login/cadastro, contato, serviços e área administrativa em versões client-side.
- Tipografia, imagens, paleta e estilos originais reaproveitados dos arquivos fornecidos.
- Dados de sessão e carrinho simulados com `localStorage`.

## Execução
```bash
npm install
npm run dev
```

Para produção:
```bash
npm run build
npm run preview
```

> A aplicação não contém PHP. O backend MySQL/Mercado Pago do projeto original foi substituído por persistência client-side para manter o projeto executável somente com JavaScript/TypeScript/React/HTML/CSS. Para produção, a camada de API pode ser conectada a um serviço externo compatível sem reintroduzir PHP.
