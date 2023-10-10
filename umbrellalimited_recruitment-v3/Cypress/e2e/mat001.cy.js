describe('asercja value', () => {
  it('wpisywanie poprawnej wartosci', () => {
    cy.visit('http://localhost:5173/')
    cy.get('#app > main > div > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > div > input').type('22', '{enter}')
    cy.get('#app > main > div > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > div > input').should('have.prop', 'value', '22')
  })
})