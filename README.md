## Campeonato Brasileiro API
Este projeto é uma simulação de uma API CRUD (Create, Read, Update, Delete) para gerenciar informações do Campeonato Brasileiro. Foi desenvolvida utilizando NodeJS e Express, permitindo operações básicas de criação, leitura, atualização e exclusão de dados dos times e partidas.

## Funcionalidades:
CRUD de Times

## Criar um novo time
Listar todos os times

Atualizar informações de um time no campeonato

Deletar um time


## Tecnologias Utilizadas
NodeJS
Express

## Iniciar o Servidor e Utilizar a Aplicação

Certifique-se de que todas as dependências estão instaladas corretamente.

### Iniciar o Servidor

Para iniciar o servidor Node.js, execute o seguinte comando na raiz do projeto:

```bash
node --watch ./app.js
```
Isso iniciará o servidor e sua aplicação estará pronta para receber requisições.

## Criar um time, por exemplo:
Para criar um novo time, envie uma requisição POST para a rota /api com o seguinte corpo da requisição JSON:
```javascript
  {
        nome: 'Fluminense',
        sigla: 'FLU',
        pontos: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        golsMarcados: 0,
        golsSofridos: 0,
        saldoGols: 0,
    }
```

## Testes
Para testar a aplicação, utilize ferramentas como Postman para enviar requisições HTTP e verificar as respostas da API.

## Contribuindo

Sinta-se à vontade para contribuir com melhorias para o projeto. Abra uma issue para discutir novas funcionalidades ou envie um pull request com suas alterações.

Para contribuir:

1. Faça um fork do repositório.
2. Crie uma branch com a sua feature: `git checkout -b minha-feature`.
3. Commit suas mudanças: `git commit -m 'Adiciona minha feature'`.
4. Push para a branch: `git push origin minha-feature`.
5. Abra um Pull Request.
