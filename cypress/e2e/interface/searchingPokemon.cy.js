
/// <reference types ="cypress" />

describe('Searching Pokemon', () => {

  const baseUrl = 'https://www.pokemon.com/br/pokedex/'
  const loading = 3000

  beforeEach(() => {
    cy.clearCookies()
  })


  it('Simple search', () => {
    cy.visit(baseUrl)
    cy.wait(loading)
    cy.searchPokemon('Snorlax')
    cy.get('figure > a > img').click()
    cy.get('.pokedex-pokemon-pagination-title > div').contains('Snorlax')

  })

  it('Search with error', () => {
    cy.visit(baseUrl)
    cy.wait(loading)
    cy.searchPokemon('Pokemon inexistente')
    cy.get('body > div.container.pokedex > section.section.pokedex-results.overflow-visible > div.no-results.column-12.push-1 > div > h3').contains('Nenhum Pokémon corresponde à sua pesquisa!');

  })

  it('Advanced search', () => {
    cy.visit(baseUrl)
    cy.wait(loading)
    cy.get('body > div.container.pokedex > section.section.pokedex-filter-toggle > div > span').click()
    cy.get(':nth-child(7) > .type-filter').click()
    cy.get(':nth-child(8) > .type-filter').click()
    cy.get('.pokedex-filter-height-list > .middle > .icon').click()
    cy.get('.pokedex-filter-weight-list > .middle > .icon').click()
    cy.get('#maxRangeBox').type('{selectall}{backspace}' +'100')
    cy.get('.filter-action > #search').click()
    cy.get('body > div.container.pokedex > section.section.pokedex-results.overflow-visible > ul > li > figure').should('have.length', 1)
    cy.get('body > div.container.pokedex > section.section.pokedex-results.overflow-visible > ul > li > div > h5').contains('Charizard')

  })

})