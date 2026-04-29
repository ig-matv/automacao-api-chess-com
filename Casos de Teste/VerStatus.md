## Feature: Ver Stats


  ## Scenario: Buscar estatísticas com sucesso

    Dado que o username "GMKrikor" existe
    Quando eu faço GET em "/player/GMKrikor/stats"
    Então o status deve ser 200
    E a resposta deve conter "chess_rapid" e "chess_blitz"

  ## Scenario: Validar estrutura do chess_rapid

    Dado que o username "GMKrikor" existe
    Quando eu faço GET em "/player/GMKrikor/stats"
    Entao "chess_rapid" deve conter "last", "best" e "record"
    E "last.rating" deve ser numérico
    E "record.win" deve ser numérico

  ## Scenario: Validar campos opcionais ou vazios

    Dado que o username "GMKrikor" existe
    Quando eu faço GET em "/player/GMKrikor/stats"
    Então o campo "puzzle_rush" deve existir
  

  ## Scenario: Username inexistente

    Given que o username "usuario_fake_123" não existe
    When eu faço GET em "/player/usuario_fake_123/stats"
    Then o status deve ser 404