/// <reference types = "cypress" />


describe("Searching Pokemon with API ", () => {

    it('Simple search with name', () => {

        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/snorlax',
            headers: {
              
            },
            body: {

            }
        }).then(response => {
            console.log(response)
            expect(response.status).to.be.equal(200)
            expect(response.body.name).to.be.equal("snorlax")
        })
    })
    
})


