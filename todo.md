# Tarefas — atualização do webhook de logs

- [x] Localizar todas as referências a webhooks e funções de logging no bundle importado.
- [x] Confirmar se os logs são enviados diretamente do navegador e quais eventos acionam o envio.
- [x] Substituir somente o endpoint Discord autorizado pelo usuário, sem alterar o restante do fluxo.
- [x] Verificar se o endpoint atualizado aparece no build e se não há referência ativa ao endpoint anterior.
- [x] Executar o build e revisar a prévia; o carregamento automático da página pode ter disparado o log de visita.
- [x] Criar checkpoint após o usuário fornecer um endpoint Discord válido; a validação final retornou HTTP 204.
