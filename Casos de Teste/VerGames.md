## Feature: Ver Games



  ## Scenario: Listar partidas com sucesso
  
    Dado que o username "GMKrikor" existe
    Quando eu faço GET em "/player/GMKrikor/games"
    Então o status deve ser 200
    E a resposta deve conter uma lista de partidas

  ## Scenario: Validar campos das partidas

    Dado que o username "GMKrikor" existe
    Quando eu faço GET em "/player/GMKrikor/games"
    Então cada partida deve conter "url" e "time_control"

  ## Scenario: Username inválido

    Dado que o username "%$$$%" é inválido
    Quando eu faço GET em "/player/%$$$%/games"
    Então o status deve ser 400