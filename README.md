# Chess.com API Tests

Projeto de automacao de testes de API com **Cypress**, utilizando a API publica do **Chess.com** para validar cenarios positivos e negativos relacionados a jogadores, estatisticas e partidas.

## Objetivo

Este projeto foi criado para praticar:

- testes automatizados de API
- validacao de status code
- validacao de estrutura e tipos de resposta
- cobertura de cenarios positivos e negativos
- organizacao de casos de teste para manutencao futura

## Tecnologias utilizadas

- JavaScript
- Cypress
- Chess.com Public API

## Cenarios automatizados

Os testes cobrem os seguintes endpoints:

- `GET /player/{username}`: busca de jogador
- `GET /player/{username}/stats`: consulta de estatisticas
- `GET /player/{username}/games`: listagem de partidas
- `GET /player/{username}/games/archives`: historico de arquivos de partidas

Algumas validacoes implementadas:

- retorno `200` para consultas validas
- retorno `400` para username invalido
- retorno `404` para jogador inexistente
- validacao de campos importantes da resposta
- validacao de tipos de dados
- validacao de estrutura de objetos e listas


## Casos de teste documentados

Os cenarios tambem estao descritos na pasta `Casos de Teste`, seguindo uma estrutura simples inspirada em BDD para facilitar leitura e organizacao.

## Observacoes

- A API utilizada e publica.
- Os testes usam `cy.request()` para validar diretamente os endpoints.
- A URL base foi externalizada em variavel de ambiente para facilitar manutencao.

## Autor

Projeto desenvolvido por **Igor Matvicio** para praticar automacao de testes de API com Cypress.
