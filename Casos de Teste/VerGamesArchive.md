## Feature: Ver Games Archive


  ## Scenario: Buscar arquivos de partidas

    Dado que o username "GMKrikor" existe
    Quando eu faço GET em "/player/GMKrikor/games/archives"
    Então o status deve ser 200
    E a resposta deve conter uma lista de URLs

  ## Scenario: Validar formato dos arquivos

    Given que o username "GMKrikor" existe
    When eu faço GET em "/player/GMKrikor/games/archives"
    Then cada item deve ser uma URL válida

    
  ## Scenario: Jogador inexistente

    Dado que o username "fake_user_999" não existe
    Quando eu faço GET em "/player/fake_user_999/games/archives"
    Então o status deve ser 404
