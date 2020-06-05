describe('user can click on button', () => {
    it('test', () => {
        cy.visit('http://localhost:3003')
        cy.contains("Greetings")
        cy.get("#quote").click()
    })
})
