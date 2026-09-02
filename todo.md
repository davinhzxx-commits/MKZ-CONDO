# Tarefas — atualização do webhook de logs

- [x] Localizar todas as referências a webhooks e funções de logging no bundle importado.
- [x] Confirmar se os logs são enviados diretamente do navegador e quais eventos acionam o envio.
- [x] Substituir somente o endpoint Discord autorizado pelo usuário, sem alterar o restante do fluxo.
- [x] Verificar se o endpoint atualizado aparece no build e se não há referência ativa ao endpoint anterior.
- [x] Executar o build e revisar a prévia; o carregamento automático da página pode ter disparado o log de visita.
- [x] Criar checkpoint após o usuário fornecer um endpoint Discord válido; a validação final retornou HTTP 204.

## Tarefas — publicação no GitHub e Vercel

- [x] Auditar a estrutura atual do projeto e o conteúdo do repositório remoto.
- [x] Ajustar a configuração de build e saída para hospedagem estática na Vercel.
- [x] Garantir que segredos, arquivos gerados e dependências locais não sejam enviados.
- [x] Executar o build de produção e validar os arquivos de saída.
- [x] Fazer commit e push para o repositório informado.
- [x] Confirmar o commit remoto e orientar a conexão/importação na Vercel.
