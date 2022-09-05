
Cypress.Commands.add('searchPokemon', (pokemon) => {
    cy.get('#searchInput')
        .type(pokemon)

    cy.get('#search')
        .click();
})

