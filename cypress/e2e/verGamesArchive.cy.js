describe('Games Arquive', ()=>{
    const baseUrl = Cypress.env('URLCHESS')
    describe('Dados Validos', ()=>{
        it('Buscar arquivos de partidas', ()=>{
            cy.request({
                method: 'GET',
                url: `${baseUrl}player/GMKrikor/games/archives`,
            }).then((response)=>{
                expect(response.status).to.eq(200)
                expect(response.body.archives)

                cy.log('Archives:' + response.body.archives)
            })
        })
        it('Validar URLS', ()=>{
            cy.request({
                method: 'GET',
                url: `${baseUrl}player/GMKrikor/games/archives`,
            }).then((response)=>{
                expect(response.status).to.eq(200)
                expect(response.body.archives)

                cy.log('Archives:' + response.body.archives)

                response.body.archives.forEach((url) => {
                 expect(url).to.match(/^https?:\/\/.+/)
                })
            })
        })

    })
    describe('Dados Invalidos', ()=>{
        it('Buscar arquivos de partidas com Jogador inexistente', ()=>{
            cy.request({
                method: 'GET',
                url: `${baseUrl}player/GMKrikorq2fasc/games/archives`,
                failOnStatusCode: false,
            }).then((response)=>{
                expect(response.status).to.eq(404)
                expect(response.body.code)
                expect(response.body.message)

                cy.log('message:' + response.body.message)
                cy.log('code:' + response.body.code)
            })
        })
    })
})