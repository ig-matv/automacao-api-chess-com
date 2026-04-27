describe('Procurar Player', ()=>{
    const baseUrl = Cypress.env('URLCHESS')

    describe('Dados validos', ()=>{
        it('Buscar jogador existente', ()=>{
            cy.request({
                method:'GET',
                url: `${baseUrl}player/GMKrikor`
            }).then((response)=>{
                expect(response.status).to.eq(200)
                expect(response.body.username)
                expect(response.body.player_id)
                expect(response.body.league)

                cy.log('Username:' + response.body.username)
                cy.log('Player_id:' + response.body.player_id)
                cy.log('league:' + response.body.league)
            })
        })
        it('Validar formato da resposta', ()=>{
            cy.request({
                method:'GET',
                url: `${baseUrl}player/GMKrikor`
            }).then((response)=>{
                expect(response.status).to.eq(200)
                expect(response.body.username).to.be.a('string')
                expect(response.body.followers).to.be.a('number')
            })
        })
    })
    describe('Dados invalidos', ()=>{
        it('Buscar jogador inexistente', ()=>{
            cy.request({
                method:'GET',
                url: `${baseUrl}player/GMKrikorasdf2da`,
                failOnStatusCode: false,
            }).then((response)=>{
                expect(response.status).to.eq(404)
                expect(response.body.code)
                expect(response.body.message)

                cy.log('message:' + response.body.message)
                cy.log('code:' + response.body.code)
            })
        })
        it('Buscar jogador com username vazio', ()=>{
            cy.request({
                method:'GET',
                url: `${baseUrl}player/`,
                failOnStatusCode: false,
            }).then((response)=>{
                expect(response.status).to.eq(404)
                expect(response.body.code)
                expect(response.body.message)

                cy.log('message:' + response.body.message)
                cy.log('code:' + response.body.code)
            })
        })
        it('Buscar jogador com username invalido', ()=>{
            cy.request({
                method:'GET',
                url: `${baseUrl}player/%$$$%`,
                failOnStatusCode: false,
            }).then((response)=>{
                expect(response.status).to.eq(400)
            })
        })
    })
})