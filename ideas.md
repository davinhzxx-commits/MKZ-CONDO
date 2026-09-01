# Direção visual do projeto

## Abordagens consideradas

### Theme Name: Preservação fiel do site importado
Very Brief Intro: Manter a identidade, estrutura, assets e comportamento do pacote enviado, priorizando ativação rápida e edição futura sem alterar a experiência existente.
Probability: 0.07

### Theme Name: Roblox editorial premium
Very Brief Intro: Reorganizar o conteúdo em uma experiência editorial escura, com tipografia expressiva, ritmo de revista digital e foco em descoberta.
Probability: 0.03

### Theme Name: Arcade utilitário
Very Brief Intro: Converter a experiência em uma interface de catálogo objetiva, com navegação compacta, filtros evidentes e resposta imediata às ações.
Probability: 0.08

## Abordagem escolhida: Preservação fiel do site importado

### Design Movement
Preservação de interface existente com mentalidade de design de sistemas: o pacote recebido é a fonte de verdade visual, e a ativação deve reduzir risco de regressão.

### Core Principles
- Fidelidade estrutural: manter HTML, bundles, estilos, scripts e assets já entregues.
- Intervenção mínima: não redesenhar nem reescrever o produto sem solicitação explícita.
- Editabilidade: organizar o material importado em um projeto que possa ser alterado no ambiente.
- Integridade funcional: preservar caminhos, favicon, metadados e comportamento do site original.

### Color Philosophy
As cores existentes pertencem ao produto importado e serão tratadas como tokens de preservação. Nesta etapa, não haverá substituição cromática ou aplicação de uma nova paleta; o objetivo é que o site apareça no ambiente com a mesma leitura visual do pacote original.

### Layout Paradigm
Estrutura estática orientada pelo build existente. A página principal permanece como ponto de entrada, com seus próprios componentes compilados e folhas de estilo, enquanto os arquivos ficam dispostos de forma transparente para facilitar inspeção e futuras trocas.

### Signature Elements
- Favicon SVG e metadados originais.
- Bundles e folhas de estilo com nomes e referências preservados.
- Assets de mídia, áudio e scripts auxiliares mantidos como arquivos independentes.

### Interaction Philosophy
As interações devem permanecer como foram entregues no pacote. A ativação não introduz novas transições, estados ou mensagens que possam alterar o fluxo original.

### Animation
Preservar animações e efeitos já embutidos nos bundles. Não adicionar keyframes ou transições novas nesta fase; qualquer ajuste futuro deve ser deliberado e validado visualmente.

### Typography System
Preservar a família tipográfica e pesos carregados pelo HTML original, incluindo a referência existente ao Google Fonts. A hierarquia tipográfica continua sendo controlada pelos estilos do pacote importado.

### Brand Essence
Uma experiência web de Roblox Condo para usuários que precisam acessar o site como ele foi entregue, com a diferença de agora estar ativado em um ambiente editável e versionável.

Personality adjectives: fiel, direta, preservada.

### Brand Voice
O texto existente permanece inalterado. Caso sejam necessárias futuras alterações de copy, elas devem seguir o vocabulário e o tom já presentes no pacote, sem introduzir mensagens genéricas ou promessas novas.

Exemplos de linhas a preservar:
- Roblox Condo
- Conteúdo e navegação conforme o pacote enviado

### Wordmark & Logo
Preservar o favicon.svg e o wordmark já renderizado pela aplicação. Não criar uma nova marca nesta ativação para evitar descaracterizar o material de origem.

### Signature Brand Color
A cor de assinatura é a cor dominante já definida em `theme-override.css` e nos bundles originais. Ela permanece como referência até que o usuário solicite uma direção visual diferente.

## Style Decisions

- A ativação prioriza fidelidade ao pacote enviado, não redesign.
- Assets grandes ficam fora do diretório de código e são referenciados pelo armazenamento persistente do ambiente.
- O HTML de entrada permanece editável no projeto, enquanto os bundles compilados são mantidos como artefatos do site original.
