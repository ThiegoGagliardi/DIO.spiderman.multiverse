# Projeto: Todos os Filmes do Homem-Aranha

Este projeto foi desenvolvido utilizando **HTML**, **CSS** e **JavaScript**, com o objetivo de apresentar todos os filmes do Homem-Aranha lançados no cinema, estrelados por **Tobey Maguire**, **Andrew Garfield** e **Tom Holland**. 

O projeto conta com uma interface interativa, incluindo um carrossel 3D na página inicial e páginas individuais para cada ator com detalhes sobre seus respectivos filmes.

---

## 🚀 Funcionalidades

### **Página Inicial**
- **Carrossel 3D**:
  - Exibe fotos dos três atores que interpretaram o Homem-Aranha.
  - Navegação interativa para girar o carrossel utilizando botões localizados no rodapé.
- **Links de Navegação**:
  - No topo da página, links levam diretamente para as páginas dos filmes de cada ator.

### **Páginas Individuais**
- **Layout Personalizado**:
  - Cada página é dedicada aos filmes de um ator específico.
  - Inclui o logo de cada filme com o trailer sendo reproduzido em loop no fundo (mutado por padrão).
- **Controles de Vídeo**:
  - Botão para assistir ao trailer no YouTube.
  - Botão para pausar o vídeo em loop, revelando uma imagem estática relacionada ao filme no background.
- **Informações do Filme**:
  - Breve sinopse.
  - Nome do diretor.
  - Ano de lançamento.
- **Galeria de Fotos**:
  - Exibe imagens relacionadas ao filme.
- **Navegação por Filmes**:
  - Botões no canto esquerdo permitem navegar entre os filmes do mesmo ator.

---

## 📂 Estrutura de Diretórios

```plaintext
.
├── index.html         # Página inicial do projeto
├── README.md          # Documentação do projeto
├── src                # Diretório principal para arquivos do projeto
│   ├── assets         # Recursos como imagens e vídeos
│   │   ├── images     # Imagens dos filmes e atores
│   │   └── videos     # Trailers dos filmes
│   ├── pages          # Páginas individuais para cada ator
│   │   ├── andrew-garfield
│   │   ├── tobey-maguire
│   │   └── tom-holland
│   ├── script         # Arquivos JavaScript
│   └── style          # Arquivos CSS
│       └── components # Componentes reutilizáveis de estilo
