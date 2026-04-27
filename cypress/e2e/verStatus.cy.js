describe('Status', ()=>{
    const baseUrl = Cypress.env('URLCHESS')
    describe('Dados validos', ()=>{
        it('Buscar estatísticas com sucesso', ()=>{
            cy.request({
                method:'GET',
                url: `${baseUrl}player/GMKrikor/stats`,
            }).then((response)=>{
                expect(response.status).to.eq(200)

                const rapid = response.body.chess_rapid
                const blitz = response.body.chess_blitz
                const bullet = response.body.chess_bullet

                //Rapid
                expect(rapid).to.include.all.keys('last', 'best')

                expect(rapid.last).to.have.all.keys('rating', 'date', 'rd')
                expect(rapid.best).to.have.all.keys('rating', 'date', 'game')

                //Blitz
                expect(blitz).to.include.all.keys('last', 'best')

                expect(blitz.last).to.have.all.keys('rating', 'date', 'rd')
                expect(blitz.best).to.have.all.keys('rating', 'date', 'game')

                //Bullet
                expect(bullet).to.include.all.keys('last', 'best')

                expect(bullet.last).to.have.all.keys('rating', 'date', 'rd')
                expect(bullet.best).to.have.all.keys('rating', 'date', 'game')

            })
        })
        it('Validar estrutura do chess_rapid', ()=>{
            cy.request({
                method:'GET',
                url: `${baseUrl}player/GMKrikor/stats`,
            }).then((response)=>{
                expect(response.status).to.eq(200)

                const rapid = response.body.chess_rapid

                expect(rapid).to.have.all.keys('last', 'best', 'record')

                expect(rapid.last.rating).to.be.a('number')
                expect(rapid.record.win).to.be.a('number')

            })
        })

        it('Validar campos opcionais ou vazios', ()=>{
            cy.request({
                method:'GET',
                url: `${baseUrl}player/GMKrikor/stats`,
            }).then((response)=>{
                expect(response.status).to.eq(200)

                const rush = response.body.puzzle_rush
                expect(rush).to.exist
            })
        })
    })
    describe('Dados invalidos',()=>{
        it('Buscar jogador inexistente', ()=>{
            cy.request({
                method:'GET',
                url: `${baseUrl}player/GMKrikorasdawf/stats`,
                failOnStatusCode: false,
            }).then((response)=>{
                expect(response.status).to.eq(404)
                expect(response.body.code)
                expect(response.body.message)

            })
        })
    })
})