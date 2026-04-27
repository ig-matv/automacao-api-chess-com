describe('Ver Games',()=>{
    const baseUrl = Cypress.env('URLCHESS')

    describe('Dados validos',()=>{
        it('Listar partidas com sucesso',()=>{
            cy.request({
                method:'GET',
                url: `${baseUrl}player/GMKrikor/games`
            }).then((response)=>{
                expect(response.status).to.eq(200)
                expect(response.body.games)

                cy.log('Games:' + response.body.games)
            })
        })
    })
    describe('Dados invalidos', ()=>{
        it('Username inválido', ()=>{
            cy.request({
                method:'GET',
                url: `${baseUrl}player/%$$$%/games`,
                failOnStatusCode: false,
            }).then((response)=>{
                expect(response.status).to.eq(400)
            })
        })
    })
})