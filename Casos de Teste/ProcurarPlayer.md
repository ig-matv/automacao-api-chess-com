## Feature: Procurar Player
 
  ## Scenario: Buscar jogador existente

    Dado que o username "GMKrikor" existe
    Quando eu faço GET em "/player/GMKrikor"
    Então o status deve ser 200
    E a resposta deve conter "username" , "player_id" e "league"

  ## Scenario: Validar formato da resposta

    Dado que o username "GMKrikor" existe
    Quando eu faço GET em "/player/GMKrikor"
    Então o campo "username" deve ser string
    E o campo "followers" deve ser numérico

  ## Scenario: Buscar jogador inexistente

    Dado que o username "player_invalido_123" não existe
    Quando eu faço GET em "/player/player_invalido_123"
    Então o status deve ser 404


  ## Scenario: Buscar jogador com username vazio

    Dado que o username está vazio
    Quando eu faço GET em "/player/"
    Então o status deve ser 404

    
  ## Scenario: Buscar jogador com username invalido

    Dado que o username está invalido
    Quando eu faço GET em "/player/%$$$%"
    Então o status deve ser 400