# Roblox Condo

Site estático em Vite, organizado para hospedagem na Vercel.

## Desenvolvimento local

Instale as dependências com `pnpm install` e inicie a prévia com `pnpm dev`. O site é servido pela pasta `client/`, enquanto os assets públicos ficam em `client/public/`.

## Build da Vercel

A configuração em `vercel.json` define o comando `pnpm run build:vercel` e a saída `dist/public`. O build gera apenas os arquivos necessários para a hospedagem do frontend. O comando `pnpm build` original continua disponível para o ambiente local do projeto.

## Logs no Discord

O frontend envia os eventos de log para `/api/log`. A função serverless em `api/log.js` encaminha esses eventos ao Discord sem revelar o webhook no JavaScript público.

Antes de publicar, abra as configurações do projeto na Vercel e crie a variável de ambiente abaixo para os ambientes desejados:

```text
DISCORD_WEBHOOK_URL=https://discord.com/api/webhooks/SEU_ID/SEU_TOKEN
```

Não adicione a URL real ao Git, ao código-fonte ou a arquivos públicos. A função aceita apenas URLs HTTPS do domínio oficial do Discord, limita a quantidade e o tamanho dos embeds e retorna erro quando o destino rejeita o envio.

## Deploy pela Vercel

Importe o repositório GitHub `davinhzxx-commits/MKZ-CONDO`, mantenha a raiz do projeto como diretório de trabalho, confirme o comando de build detectado como `pnpm run build:vercel` e defina a saída como `dist/public` caso a plataforma não leia automaticamente o `vercel.json`. Depois, cadastre `DISCORD_WEBHOOK_URL` e faça um novo deploy.

## Segurança

O token usado para autenticar o GitHub e a URL do webhook são credenciais. Eles não devem ser mantidos no repositório. Como ambos foram compartilhados durante a configuração, recomenda-se revogá-los e gerar novos valores após concluir o push.
